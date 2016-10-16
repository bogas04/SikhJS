import React, { Component } from 'react';
import { findDOMNode } from 'react-dom';
import { Throttle } from 'react-throttle';
import Toggle from 'material-ui/Toggle';
import { Toolbar, ToolbarGroup, ToolbarTitle } from 'material-ui/Toolbar';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

export default class SGGS extends Component {
  constructor (props) {
    super (props);
    let { ang = 1 } = this.props.params || { };
    this.state = { lines: [], ang, larivaar: false, showTranslation: false };
    this.updateLines();
  }
  render () {
    const MAX_ANG = 1430, MIN_ANG = 1;
    const { lines, ang, larivaar, showTranslation } = this.state;

    const angContent = lines.map(({ id, text, original, translation}) => (
      <div key={id} style={{ display: showTranslation ? 'block' : 'inline-block' }}>
        {larivaar ? original : ` ${text} `}
        {showTranslation ? <div className="english" style={{ color: 'grey' }}>{translation.text}</div> : ''}
      </div>
    ));

    const AngBar = () => <Toolbar className='toolbar'>
      <ToolbarGroup firstChild={true}>
        <ToolbarTitle className='toolbar-title' text="Sri Guru Granth Sahib" />
        <RaisedButton className="raised-button" disabled={lines.length === 0 || ang === MIN_ANG} onClick={() => this.decrementAng()} label="Previous Ang" />
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
        <RaisedButton className="raised-button" disabled={lines.length === 0 || ang === MAX_ANG} onClick={() => this.incrementAng()} label="Next Ang " />
      </ToolbarGroup>
      <ToolbarGroup>
        <Toggle style={{ padding: '15px 0' }} name="larivaar" label="Larivaar" onToggle={e => this.toggleLarivaar()} toggled={larivaar} />
      </ToolbarGroup>
      <ToolbarGroup>
        <Toggle style={{ padding: '15px 0' }} name="translation" label="English Translation" onToggle={e => this.toggleTranslation()} toggled={showTranslation} />
      </ToolbarGroup>
    </Toolbar>;

    return (
      <div>
        <AngBar />
        <div>
          {
            lines.length === 0
            ? <h1>Loading</h1>
            : <div style={{ textAlign: 'left', padding: 20 }} className="gurbani-text">{angContent}</div>
          }
        </div>
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
  incrementAng() { this.setAng(this.state.ang + 1); } 
  decrementAng() { this.setAng(this.state.ang - 1); } 
  updateLines(ang = this.state.ang) {
    return fetch(`docs/json/SGGS/Ang ${ang}.json`).then(r => r.json()).then(lines => Promise.resolve(
      this.setState({ lines })
    ));
  }
  toggleLarivaar() { this.setState({ larivaar: !this.state.larivaar }); }
  toggleTranslation() { this.setState({ showTranslation: !this.state.showTranslation }); }
}
