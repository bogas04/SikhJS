import React, { Component } from 'react';

import { isBookmarked, toggleBookmark } from '../../bookmarks';

import Loader from '../../components/Loader';

import Emoji from '../../components/Emoji';

import Toolbar from '../../components/Toolbar';

import Textfield from '../../components/Textfield';

import Button from '../../components/Button';

import Switch from '../../components/Switch';

import styles from './styles';

import constants from './constants';

export default class SGGS extends Component {
  constructor (props) {
    super(props);

    let { ang = 1 } = this.props.match.params || { };

    ang = parseInt(ang, 10);

    this.state = {
      lines: [],
      ang,
      larivaar: false,
      larivaarAssist: false,
      showTranslation: false,
      isBookmarked: false,
    };

    this.updateLines();

    isBookmarked({ key: 'sggs', value: this.state.ang })
      .then(isBookmarked => this.setState({ isBookmarked }))
      .catch(err => console.error(err));

    this.handleDecrementAng = this.handleDecrementAng.bind(this);
    this.handleIncrementAng = this.handleIncrementAng.bind(this);
    this.handleRandomAng = this.handleRandomAng.bind(this);

    this.handleToggleLarivaar = this.handleToggleLarivaar.bind(this);
    this.handleToggleLarivaarAssist = this.handleToggleLarivaarAssist.bind(this);
    this.handleToggleTranslation = this.handleToggleTranslation.bind(this);
    this.handleToggleBookmark = this.handleToggleBookmark.bind(this);
  }

  render () {
    const { isBookmarked, lines, ang, larivaar, larivaarAssist, showTranslation } = this.state;

    const Orange = ({ text }) => <span style={styles.orange}>{text}</span>;

    const larivaarify = line => <span>{
      line
        .split(' ')
        .map((akhar, index) => (
          larivaarAssist && akhar.indexOf('॥') < 0 && index % 2 === 0
          ? <Orange key={index} text={akhar} />
          : <span key={index}>{akhar}</span>
        ))
    }</span>;

    const angContent = lines.map(({ id, text, translation }) => (
      <div key={id} style={styles.translation(showTranslation, larivaar)}>
        {larivaar ? larivaarify(text) : ` ${text} `}
        {showTranslation ? <blockquote className="english">{translation.text}</blockquote> : ''}
      </div>
    ));

    const className = [ 'gurbani-text', 'gurbani-text raag-ang' ][constants.RAAG_ANGS.includes(ang) ? 1 : 0];

    const AngBar = () => <Toolbar title={`Sri Guru Granth Sahib`}>
      <div style={styles.flex}>

        <Button title="Bookmark" onClick={this.handleToggleBookmark}>{isBookmarked ? '★' : '☆'}</Button>

        <div style={styles.flex}>
          <Button
            disabled={lines.length === 0 || ang === constants.MIN_ANG}
            onClick={this.handleDecrementAng}
            title="Previous"
          >
            <Emoji color="black">👈</Emoji>
          </Button>

          <Textfield
            disabled={lines.length === 0}
            center
            size={60}
            placeholder={String(ang)}
            onBlur={e => this.setAng(Number(e.target.value))}
            type="number"
            min={constants.MIN_ANG}
            max={constants.MAX_ANG}
            defaultValue={ang}
          />

          <Button
            disabled={lines.length === 0 || ang === constants.MAX_ANG}
            onClick={this.handleIncrementAng}
            title="Next"
          >
            <Emoji color="black">👉</Emoji>
          </Button>
        </div>

        <Button size={13} title="Random Ang" onClick={this.handleRandomAng}><Emoji color="black">🍀</Emoji></Button>

        <div style={styles.buttons}>
          <div style={styles.marginH('40px')}>
            <Switch
              defaultChecked={larivaar}
              id="larivaar"
              onChange={this.handleToggleLarivaar}
            >
              Larivaar
            </Switch>
          </div>

          <div style={styles.marginH('40px')}>
            <Switch
              defaultChecked={larivaarAssist}
              id="larivaarAssist"
              onChange={this.handleToggleLarivaarAssist}
              disabled={!this.state.larivaar}
            >
              <span>Larivaar<Orange text="Assist" /></span>
            </Switch>
          </div>

          <div style={styles.marginH('40px')}>
            <Switch
              defaultChecked={showTranslation}
              id="translation"
              onChange={this.handleToggleTranslation}
            >
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

  updateLines (ang = this.state.ang) {
    return fetch(`assets/docs/json/SGGS/Ang ${ang}.json`).then(r => r.json()).then(lines => Promise.resolve(
      this.setState({ lines })
    ));
  }

  setAng (ang) {
    if (ang) {
      this.setState({ lines: [] });
      this.updateLines(ang);
      this.setState({ ang });

      isBookmarked({ key: 'sggs', value: ang })
        .then(isBookmarked => this.setState({ isBookmarked }))
        .catch(err => console.error(err));
    }
  }

  handleRandomAng () {
    this.setAng(parseInt(1 + (Math.random() * 1430), 10));
  }

  handleIncrementAng () {
    this.setAng(parseInt(this.state.ang, 10) + 1);
  }

  handleDecrementAng () {
    this.setAng(parseInt(this.state.ang, 10) - 1);
  }

  handleToggleLarivaar () {
    this.setState({ larivaar: !this.state.larivaar });
  }

  handleToggleLarivaarAssist () {
    this.setState({ larivaarAssist: !this.state.larivaarAssist });
  }

  handleToggleTranslation () {
    this.setState({ showTranslation: !this.state.showTranslation });
  }

  handleToggleBookmark () {
    const { isBookmarked, ang } = this.state;
    const title = `Sri Guru Granth Sahib ${ang}`;

    toggleBookmark({ isBookmarked, title, key: 'sggs', value: ang })
      .then(isBookmarked => this.setState({ isBookmarked }))
      .catch(err => console.error(err));
  }
}

SGGS.propTypes = {
  match: React.PropTypes.object,
};
