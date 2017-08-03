import PropTypes from 'prop-types';
import React, { Component } from 'react';
import styled from 'emotion/react';
import { isBookmarked, toggleBookmark } from '../../bookmarks';
import { Loader } from '../../components';
import constants from './constants';
import AngBar from './AngBar';
import AngContent from './AngContent';
import RaagAng from './RaagAng';

export default class SGGS extends Component {
  constructor (props) {
    super(props);

    let { ang = parseInt(localStorage.getItem('sggs-ang')) || 1} = this.props.match.params || { };

    ang = parseInt(ang, 10);

    this.state = {
      error: false,
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
      .catch(err => {
        console.error(err);
        this.setState({ error: true });
      });

    this.setAng = this.setAng.bind(this);
    this.handleDecrementAng = this.handleDecrementAng.bind(this);
    this.handleIncrementAng = this.handleIncrementAng.bind(this);
    this.handleRandomAng = this.handleRandomAng.bind(this);

    this.handleToggleLarivaar = this.handleToggleLarivaar.bind(this);
    this.handleToggleLarivaarAssist = this.handleToggleLarivaarAssist.bind(this);
    this.handleToggleTranslation = this.handleToggleTranslation.bind(this);
    this.handleToggleBookmark = this.handleToggleBookmark.bind(this);
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

  updateLines(ang = this.state.ang) {
    return fetch(`assets/docs/json/SGGS/Ang ${ang}.json`)
      .then(r => r.json())
      .then(lines => this.setState({ lines, error: false }))
      .catch(err => {
        console.error(err);
        this.setState({ error: true });
      });
  }

  setAng(ang) {
    console.log('SGGS received ' + ang);
    if (ang) {
      this.setState({ lines: [] });
      this.updateLines(ang);
      this.setState({ ang });
      localStorage.setItem('sggs-ang', ang);

      isBookmarked({ key: 'sggs', value: ang })
        .then(isBookmarked => this.setState({ isBookmarked }))
        .catch(err => {
          console.error(err);
          this.setState({ error: true });
        });
    }
  }

  handleRandomAng() {
    this.setAng(parseInt(1 + (Math.random() * 1430), 10));
  }

  handleIncrementAng() {
    this.setAng(parseInt(this.state.ang, 10) + 1);
  }

  handleDecrementAng() {
    this.setAng(parseInt(this.state.ang, 10) - 1);
  }

  handleToggleLarivaar() {
    this.setState({
      larivaar: !this.state.larivaar,
    });
  }

  handleToggleLarivaarAssist() {
    this.setState({ larivaarAssist: !this.state.larivaarAssist });
  }

  handleToggleTranslation() {
    this.setState({ showTranslation: !this.state.showTranslation });
  }

  handleToggleBookmark() {
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
