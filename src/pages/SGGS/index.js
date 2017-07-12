import React, { Component } from 'react';
import styled from 'emotion/react';
import { isBookmarked, toggleBookmark } from '../../bookmarks';
import Loader from '../../components/Loader';
import { Previous, Next, Random } from '../../components/Icons';
import Toolbar from '../../components/Toolbar';
import Textfield from '../../components/Textfield';
import Button from '../../components/Button';
import Switch from '../../components/Switch';
import constants from './constants';

const Wrapper = styled.div`
 display: flex;
 justify-content: center;
 align-items: center;
 flex-wrap: wrap;
`;

const Orange = styled.span`
  color: orange;
`;

const ButtonList = styled(Wrapper)`
 flex-direction: row;
 padding-bottom: 5px;
`;

const ButtonWrapper = styled.div`
  margin: 0 40px;
`;

const AngContent = styled.div`
  textAlign: ${({ align = 'left' }) => align};
  padding: 20px;
  lineHeight: 2em ;
`;

const Translation = styled.div`
  display: ${({ showTranslation, larivaar }) => showTranslation
    ? 'block'
    : larivaar
      ? 'inline-block'
      : 'inline'
  };
`;

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

    const larivaarify = line => <span>{
      line
        .split(' ')
        .map((akhar, index) => (
          larivaarAssist && akhar.indexOf('॥') < 0 && index % 2 === 0
          ? <Orange key={index}>{akhar}</Orange>
          : <span key={index}>{akhar}</span>
        ))
    }</span>;

    const angContent = lines.map(({ id, text, translation }) => (
      <Translation key={id} showTranslation={showTranslation} larivaar={larivaar}>
        {larivaar ? larivaarify(text) : ` ${text} `}
        {showTranslation ? <blockquote className="english">{translation.text}</blockquote> : ''}
      </Translation>
    ));

    const className = [ 'gurbani-text', 'gurbani-text raag-ang' ][constants.RAAG_ANGS.includes(ang) ? 1 : 0];

    const AngBar = () => <Toolbar title={`Sri Guru Granth Sahib`}>
      <Wrapper>
        <Button title="Bookmark" onClick={this.handleToggleBookmark}>{isBookmarked ? '★' : '☆'}</Button>

        <Wrapper>
          <Button
            disabled={lines.length === 0 || ang === constants.MIN_ANG}
            onClick={this.handleDecrementAng}
            title="Previous"
          >
            <Previous />
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
            <Next />
          </Button>
        </Wrapper>

        <Button size={13} title="Random Ang" onClick={this.handleRandomAng}>
          <Random />
        </Button>

        <ButtonList>
          <ButtonWrapper>
            <Switch
              defaultChecked={larivaar}
              id="larivaar"
              onChange={this.handleToggleLarivaar}
            >
              Larivaar
            </Switch>
          </ButtonWrapper>

          <ButtonWrapper>
            <Switch
              defaultChecked={larivaarAssist}
              id="larivaarAssist"
              onChange={this.handleToggleLarivaarAssist}
              disabled={!this.state.larivaar}
            >
              <span>Larivaar<Orange text="Assist" /></span>
            </Switch>
          </ButtonWrapper>

          <ButtonWrapper>
            <Switch
              defaultChecked={showTranslation}
              id="translation"
              onChange={this.handleToggleTranslation}
            >
              English Translation
            </Switch>
          </ButtonWrapper>
        </ButtonList>
      </Wrapper>
    </Toolbar>;

    return (
      <div>
        <AngBar />
        <Loader loading={lines.length === 0}>
          <AngContent className={className}>{angContent}</AngContent>
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
  match: React.PropTypes.object,
};
