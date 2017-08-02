import PropTypes from 'prop-types';
import React, { Component } from 'react';
import styled from 'emotion/react';
import { isBookmarked, toggleBookmark } from '../../bookmarks';
import { Loader } from '../../components';
import constants from './constants';
import AngBar from './AngBar';
import AngContent from './AngContent';

const AngContentWrapper = styled.div`
  textAlign: ${({ align = 'left' }) => align};
  padding: 20px;
  lineHeight: 2em;
`;

export default class SGGS extends Component {
  constructor (props) {
    super(props);

    let { ang = parseInt(localStorage.getItem('sggs-ang')) || 1} = this.props.match.params || { };

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

    const className = ['gurbani-text', 'gurbani-text raag-ang'][constants.RAAG_ANGS.includes(ang) ? 1 : 0];

    return (
      <div>
        <AngBar
          isBookmarked={isBookmarked}
          lines={lines}
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

        <Loader loading={lines.length === 0}>
          <AngContentWrapper className={className}>
            <AngContent lines={lines} larivaar={larivaar} larivaarAssist={larivaarAssist} showTranslation={showTranslation} />
          </AngContentWrapper>
        </Loader>
      </div>
    );
  }

  updateLines(ang = this.state.ang) {
    return fetch(`assets/docs/json/SGGS/Ang ${ang}.json`).then(r => r.json()).then(lines => Promise.resolve(
      this.setState({ lines })
    ));
  }

  setAng(ang) {
    if (ang) {
      this.setState({ lines: [] });
      this.updateLines(ang);
      this.setState({ ang });
      localStorage.setItem('sggs-ang', ang);

      isBookmarked({ key: 'sggs', value: ang })
        .then(isBookmarked => this.setState({ isBookmarked }))
        .catch(err => console.error(err));
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
    this.setState({ larivaar: !this.state.larivaar });
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
      .catch(err => console.error(err));
  }
}

SGGS.propTypes = {
  match: PropTypes.object,
};
