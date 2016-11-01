import React, { Component } from 'react';
import { findDOMNode } from 'react-dom';

import { Throttle } from 'react-throttle';
import { withRouter } from 'react-router';

import { isBookmarked, toggleBookmark } from '../../bookmarks';

import { Icon, IconButton, Textfield, Switch, Button, } from 'react-mdl';

import Loader from '../Loader';
import Toolbar from '../Toolbar';

import styles from './styles';
import constants from './constants';

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
    const { isBookmarked, lines, ang, larivaar, larivaarAssist, showTranslation } = this.state;

    const Orange = ({ text }) => <span style={styles.orange}>{text}</span>;

    const larivaarify = line => <span>{
      line.split(' ')
        .map((akhar, index) => (
          larivaarAssist && akhar.indexOf('॥') < 0 && index % 2 == 0
          ? <Orange key={index} text={akhar} />
          : <span key={index}>{akhar}</span>
        ))
    }</span>;

    const angContent = lines.map(({ id, text, original, translation }) => (
      <div key={id} style={styles.translation(showTranslation, larivaar)}>
        {larivaar ? larivaarify(text) : ` ${text} `}
        {showTranslation ? <div className="english" style={styles.grey}>{translation.text}</div> : ''}
      </div>
    ));

    const className = ['gurbani-text', 'gurbani-text raag-ang'][constants.RAAG_ANGS.includes(ang) ? 1 : 0];

    const AngBar = () => <Toolbar title={`Sri Guru Granth Sahib`}>
      <div style={styles.flex}>
        <Button raised accent ripple onClick={e => this.toggleBookmark()} >
          <Icon name={ isBookmarked ? 'star' : 'stars' } /> { isBookmarked ? 'Bookmarked' : 'Bookmark' }
        </Button>
        <Button onClick={this.randomAng} raised colored ripple><Icon name="autorenew" /> Random</Button>

        <div style={styles.flex}>
          <IconButton disabled={lines.length === 0 || ang === constants.MIN_ANG} onClick={this.decrementAng} name="chevron_left" />
          <Throttle handler="onChange" time="200">
            <Textfield
              disabled={lines.length === 0}
              className="center-input"
              style={{ width: 60 }}
              label={"" + ang}
              onBlur={e => this.setAng(Number(e.target.value))}
              type="number"
              min={constants.MIN_ANG}
              max={constants.MAX_ANG}
              defaultValue={ang}
            />
          </Throttle>
          <IconButton disabled={lines.length === 0 || ang === constants.MAX_ANG} onClick={this.incrementAng} name="chevron_right" />
        </div>

        <div style={styles.buttons}>
          <div style={styles.marginH('40px')}>
            <Switch style={styles.paddingV('15px')} defaultChecked={larivaar} id="larivaar" onChange={this.toggleLarivaar}>
              Larivaar
            </Switch>
          </div>
          <div style={styles.marginH('40px')}>
            <Switch style={styles.paddingV('15px')} defaultChecked={larivaarAssist} id="larivaarAssist"
              onChange={this.toggleLarivaarAssist} disabled={!this.state.larivaar} >
              <div>Larivaar<Orange text='Assist' /></div>
            </Switch>
          </div>

          <div style={styles.marginH('40px')}>
            <Switch defaultChecked={showTranslation} style={styles.paddingV('15px')} id="translation" onChange={this.toggleTranslation}>
              English Translation
            </Switch>
          </div>
        </div>
      </div>

    </Toolbar>;

    return (
      <div>
        <AngBar />
        <Loader loading={lines.length === 0}>
          <div style={styles.angContent} className={className}>{angContent}</div>
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
