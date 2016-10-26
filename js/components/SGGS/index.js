import React, { Component } from 'react';
import { findDOMNode } from 'react-dom';
import { Throttle } from 'react-throttle';
import Toggle from 'material-ui/Toggle';
import { Toolbar, ToolbarGroup, ToolbarTitle } from 'material-ui/Toolbar';
import Button from 'material-ui/RaisedButton';
import IconButton from 'material-ui/IconButton';
import Progress from 'material-ui/CircularProgress';
import TextField from 'material-ui/TextField';
import LeftIcon from 'material-ui/svg-icons/navigation/chevron-left';
import RightIcon from 'material-ui/svg-icons/navigation/chevron-right';

export default class SGGS extends Component {
  constructor (props) {
    super (props);
    let { ang = 1 } = this.props.params || { };
    this.state = { lines: [], ang, larivaar: false, larivaarAssist: false, showTranslation: false };
    this.updateLines();
    this.decrementAng = this.decrementAng.bind(this);
    this.incrementAng = this.incrementAng.bind(this);
    this.toggleLarivaar = this.toggleLarivaar.bind(this);
    this.toggleLarivaarAssist = this.toggleLarivaarAssist.bind(this);
    this.toggleTranslation = this.toggleTranslation.bind(this);
    this.randomAng = this.randomAng.bind(this);
  }
  render () {
    const MAX_ANG = 1430, MIN_ANG = 1;
    const { lines, ang, larivaar, larivaarAssist, showTranslation } = this.state;

    const Orange = ({ text }) => <span style={{ color: 'orange' }}>{text}</span>;

    const larivaarify = line => <span>{
      line.split(' ')
      .map((akhar, index) => (
        larivaarAssist && akhar.indexOf('॥') < 0 && index % 2 == 0
        ? <Orange key={index} text={akhar} />
        : <span key={index}>{akhar}</span>
      ))
    }</span>;

    const angContent = lines.map(({ id, text, original, translation }) => (
      <div key={id} style={showTranslation ? { display: 'block' } : { display: larivaar ? 'inline-block' : 'inline' }}>
        {larivaar ? larivaarify(text) : ` ${text} `}
        {showTranslation ? <div className="english" style={{ color: 'grey' }}>{translation.text}</div> : ''}
      </div>
    ));

    const AngBar = () => <Toolbar className='toolbar'>
      <ToolbarGroup firstChild={true}>
        <ToolbarTitle className='toolbar-title' text="Sri Guru Granth Sahib" />
        <IconButton disabled={lines.length === 0 || ang === MIN_ANG} onClick={this.decrementAng}><LeftIcon /></IconButton>
        <Throttle handler="onChange" time="200">
          <TextField
            disabled={lines.length === 0}
            style={{ width: 100 }}
            inputStyle={{ textAlign: 'center' }}
            hintText={ang}
            onChange={(e, v) => this.setAng(Number(v))}
            type="number"
            min={MIN_ANG}
            max={MAX_ANG}
            defaultValue={ang}
          />
        </Throttle>
        <IconButton disabled={lines.length === 0 || ang === MAX_ANG} onClick={this.incrementAng}><RightIcon /></IconButton>
        <Button className="raised-button" label="Random" onClick={this.randomAng}/>
      </ToolbarGroup>
      <ToolbarGroup>
        <Toggle labelPosition='right' style={{ padding: '15px 0' }} name="larivaar" label="Larivaar"
          onToggle={this.toggleLarivaar} toggled={larivaar} />
      </ToolbarGroup>
      <ToolbarGroup>
        <Toggle labelPosition='right' style={{ padding: '15px 0' }} name="larivaarAssist"
          label={<div>Larivaar<Orange text='Assist' /></div>}
          onToggle={this.toggleLarivaarAssist} disabled={!this.state.larivaar} toggled={larivaarAssist} />
      </ToolbarGroup>
      <ToolbarGroup>
        <Toggle labelPosition='right' style={{ padding: '15px 0' }} name="translation" label="English Translation"
          onToggle={this.toggleTranslation} toggled={showTranslation} />
      </ToolbarGroup>
    </Toolbar>;

    return (
      <div>
        <AngBar />
        {
          lines.length === 0
          ? <div style={{ display: 'flex', justifyContent: 'center', padding: 20 }}><Progress size={100} thickness={5} /></div>
          : <div style={{ textAlign: 'left', padding: 20 }} className="gurbani-text">{angContent}</div>
        }
      </div>
    );
  }
  setAng(ang) {
    if (ang) {
      this.setState({ lines: [] });
      this.updateLines(ang);
      this.setState({ ang });
    }
  }
  randomAng() { this.setAng(parseInt(1 + Math.random() * 1430)); }
  incrementAng() { this.setAng(this.state.ang + 1); } 
  decrementAng() { this.setAng(this.state.ang - 1); } 
  updateLines(ang = this.state.ang) {
    return fetch(`docs/json/SGGS/Ang ${ang}.json`).then(r => r.json()).then(lines => Promise.resolve(
      this.setState({ lines })
    ));
  }
  toggleLarivaar() { this.setState({ larivaar: !this.state.larivaar }); }
  toggleLarivaarAssist() { this.setState({ larivaarAssist: !this.state.larivaarAssist }); }
  toggleTranslation() { this.setState({ showTranslation: !this.state.showTranslation }); }
}
