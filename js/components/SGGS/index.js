import React, { Component } from 'react';
import { findDOMNode } from 'react-dom';

import { Throttle } from 'react-throttle';
import { withRouter } from 'react-router';

import { isBookmarked, toggleBookmark } from '../../bookmarks';

import { Icon, IconButton, Textfield, Switch, Button, } from 'react-mdl';

import Loader from '../Loader';
import Toolbar from '../Toolbar';

export default withRouter(class SGGS extends Component {
  constructor (props) {
    super (props);
    let { ang = 1 } = this.props.params || { };
    ang = parseInt(ang);
    this.state = { lines: [], ang, larivaar: false, larivaarAssist: false, showTranslation: false, isBookmarked: false };

    this.updateLines();

    isBookmarked({ key: 'sggs', value: this.state.ang })
      .then(isBookmarked => this.setState({ isBookmarked }))
      .catch(e => console.error(e));

    this.decrementAng = this.decrementAng.bind(this);
    this.incrementAng = this.incrementAng.bind(this);
    this.randomAng = this.randomAng.bind(this);

    this.toggleLarivaar = this.toggleLarivaar.bind(this);
    this.toggleLarivaarAssist = this.toggleLarivaarAssist.bind(this);
    this.toggleTranslation = this.toggleTranslation.bind(this);
    this.toggleBookmark = this.toggleBookmark.bind(this);
  }
  render () {
    const MAX_ANG = 1430, MIN_ANG = 1;
    const { isBookmarked, lines, ang, larivaar, larivaarAssist, showTranslation } = this.state;

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

    const AngBar = () => <Toolbar title={`Sri Guru Granth Sahib`}>
      <div>
        <Button raised ripple onClick={e => this.toggleBookmark()} >
          <Icon name={ isBookmarked ? 'star rate' : 'stars' } /> { isBookmarked ? 'Bookmarked' : 'Bookmark' }
        </Button>
        <IconButton disabled={lines.length === 0 || ang === MIN_ANG} onClick={this.decrementAng} name="chevron_left" />
        <Throttle handler="onChange" time="200">
          <Textfield
            disabled={lines.length === 0}
            className="center-input"
            style={{ width: 100 }}
            label={"" + ang}
            onBlur={e => this.setAng(Number(e.target.value))}
            type="number"
            min={MIN_ANG}
            max={MAX_ANG}
            defaultValue={ang}
          />
        </Throttle>
        <IconButton disabled={lines.length === 0 || ang === MAX_ANG} onClick={this.incrementAng} name="chevron_right" />

        <Button onClick={this.randomAng} raised ripple><Icon name="autorenew" /> Random</Button>
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'row', flexWrap: 'wrap', paddingBottom: 5 }}>


        <div style={{ margin: '0 40px' }}><Switch id="larivaar" style={{ padding: '15px 0' }} onChange={this.toggleLarivaar} defaultChecked={larivaar}>Larivaar</Switch></div>
        <div style={{ margin: '0 40px' }}><Switch id="larivaarAssist" style={{ padding: '15px 0' }} onChange={this.toggleLarivaarAssist} disabled={!this.state.larivaar} defaultChecked={larivaarAssist}><div>Larivaar<Orange text='Assist' /></div></Switch></div>

        <div style={{ margin: '0 40px' }}><Switch id="translation" style={{ padding: '15px 0' }} onChange={this.toggleTranslation} defaultChecked={showTranslation}>English Translation</Switch></div>
      </div>
    </Toolbar>;

    return (
      <div>
        <AngBar />
        <Loader loading={lines.length === 0}>
          <div style={{ textAlign: 'left', padding: 20, lineHeight: '2em', }} className="gurbani-text">{angContent}</div>
        </Loader>
      </div>
    );
  }
  updateLines(ang = this.state.ang) {
    return fetch(`docs/json/SGGS/Ang ${ang}.json`).then(r => r.json()).then(lines => Promise.resolve(
      this.setState({ lines })
    ));
  }

  setAng(ang) {
    if (ang) {
      this.props.router.push(`/sggs/${ang}`);
      this.setState({ lines: [] });
      this.updateLines(ang);
      this.setState({ ang });

      isBookmarked({ key: 'sggs', value: ang })
        .then(isBookmarked => this.setState({ isBookmarked }))
        .catch(e => console.error(e));
    }
  }

  randomAng() {
    this.setAng(parseInt(1 + Math.random() * 1430));
  }
  incrementAng() {
    this.setAng(parseInt(this.state.ang) + 1);
  } 
  decrementAng() {
    this.setAng(parseInt(this.state.ang) - 1);
  } 

  toggleLarivaar() {
    this.setState({ larivaar: !this.state.larivaar });
  }
  toggleLarivaarAssist() {
    this.setState({ larivaarAssist: !this.state.larivaarAssist });
  }
  toggleTranslation() {
    this.setState({ showTranslation: !this.state.showTranslation });
  }
  toggleBookmark() {
    const { isBookmarked, ang } = this.state;
    const title = `Sri Guru Granth Sahib ${ang}`;

    toggleBookmark({ isBookmarked, title, key: 'sggs', value: ang, })
      .then(isBookmarked => this.setState({ isBookmarked }))
      .catch(e => console.error(e));
  }
});
