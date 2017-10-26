import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { isBookmarked, toggleBookmark } from '../../bookmarks';
import { Loader } from '../../components';
import constants from './constants';
import AngBar from './AngBar';
import AngContent from './AngContent';
import RaagAng from './RaagAng';

const STORAGE_KEYS = {
  ANG: 'sggs-ang',
  LARIVAAR: 'sggs-larivaar',
  LARIVAAR_ASSIST: 'sggs-larivaar-assist',
  TRANSLATION: 'sggs-translation',
};

class SGGS extends Component {
  constructor (props) {
    super(props);

    const ang = parseInt(this.props.match.params.ang || localStorage.getItem(STORAGE_KEYS.ANG) || 1);

    this.state = {
      error: false,
      lines: [],
      ang,
      larivaar: localStorage.getItem(STORAGE_KEYS.LARIVAAR) === 'true',
      larivaarAssist: localStorage.getItem(STORAGE_KEYS.LARIVAAR_ASSIST) === 'true',
      showTranslation: localStorage.getItem(STORAGE_KEYS.TRANSLATION) === 'true',
      isBookmarked: false,
    };

    this.setAng = this.setAng.bind(this);
    this.handleDecrementAng = this.handleDecrementAng.bind(this);
    this.handleIncrementAng = this.handleIncrementAng.bind(this);
    this.handleRandomAng = this.handleRandomAng.bind(this);

    this.handleToggleLarivaar = this.handleToggleLarivaar.bind(this);
    this.handleToggleLarivaarAssist = this.handleToggleLarivaarAssist.bind(this);
    this.handleToggleTranslation = this.handleToggleTranslation.bind(this);
    this.handleToggleBookmark = this.handleToggleBookmark.bind(this);
  }

  componentDidMount () {
    if (this.props.match.params.ang) {
      this.updateLines();

      isBookmarked({ key: 'sggs', value: this.state.ang })
        .then(isBookmarked => this.setState({ isBookmarked }))
        .catch(err => {
          console.error(err);
          this.setState({ error: true });
        });
    } else {
      this.props.history.push(`/sggs/${this.state.ang}`);
    }
  }

  render () {
    const { isBookmarked, lines, ang, larivaar, larivaarAssist, showTranslation, error } = this.state;

    return (
      <div>
        <AngBar
          isBookmarked={isBookmarked}
          totalLines={lines.length}
          ang={ang}
          larivaar={larivaar}
          larivaarAssist={larivaarAssist}
          showTranslation={showTranslation}
          onSetAng={this.setAng}
          onDecrementAng={this.handleDecrementAng}
          onIncrementAng={this.handleIncrementAng}
          onRandomAng={this.handleRandomAng}
          onToggleLarivaar={this.handleToggleLarivaar}
          onToggleLarivaarAssist={this.handleToggleLarivaarAssist}
          onToggleTranslation={this.handleToggleTranslation}
          onToggleBookmark={this.handleToggleBookmark}
        />

        {
          error
            ? <h2> Can't find the ang {ang} </h2>
            : (
              <Loader loading={lines.length === 0}>
                <RaagAng enabled={constants.RAAG_ANGS.indexOf(ang) > -1}>
                  <AngContent lines={lines} larivaar={larivaar} larivaarAssist={larivaarAssist} showTranslation={showTranslation} />
                </RaagAng>
              </Loader>
            )
          }
      </div>
    );
  }

  updateLines (ang = this.state.ang) {
    this.setState({ lines: [] });

    return fetch(`assets/docs/json/SGGS/Ang ${ang}.json`)
      .then(r => r.json())
      .then(lines => this.setState({ lines, error: false, ang }))
      .catch(err => {
        console.error(err);
        this.setState({ error: true });
      });
  }

  setAng (ang) {
    console.log('SGGS received ' + ang);
    if (ang) {
      localStorage.setItem(STORAGE_KEYS.ANG, ang);
      this.props.history.push(`/sggs/${ang}`);
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
    localStorage.setItem(STORAGE_KEYS.LARIVAAR, !this.state.larivaar);
    this.setState({
      larivaar: !this.state.larivaar,
    });
  }

  handleToggleLarivaarAssist () {
    localStorage.setItem(STORAGE_KEYS.LARIVAAR_ASSIST, !this.state.larivaarAssist);
    this.setState({ larivaarAssist: !this.state.larivaarAssist });
  }

  handleToggleTranslation () {
    localStorage.setItem(STORAGE_KEYS.TRANSLATION, !this.state.showTranslation);
    this.setState({ showTranslation: !this.state.showTranslation });
  }

  handleToggleBookmark () {
    const { isBookmarked, ang } = this.state;
    const title = `Sri Guru Granth Sahib ${ang}`;

    toggleBookmark({ isBookmarked, title, key: 'sggs', value: ang })
      .then(isBookmarked => this.setState({ isBookmarked }))
      .catch(err => {
        console.error(err);
        this.setState({ error: true });
      });
  }
}

SGGS.propTypes = {
  match: PropTypes.object,
};

export default withRouter(SGGS);
