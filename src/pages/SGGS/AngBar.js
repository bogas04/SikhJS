import React from 'react';
import { findDOMNode } from 'react-dom';
import styled from 'emotion/react';
import { Button, Switch, Toolbar, Textfield } from '../../components';
import { Bookmark, Previous, Next, Random } from '../../components/Icons';
import shouldComponentUpdateEnhancer, { notEqualsSome } from '../../components/shouldComponentUpdateEnhancer';
import Orange from './Orange';
import constants from './constants';

const { MIN_ANG, MAX_ANG } = constants;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;

const ButtonList = styled(Wrapper) `
  flex-direction: row;
  padding-bottom: 5px;
  @media(max-width: 500px) {
    width: 100vw;
  }
`;

const SwitchList = styled(ButtonList)`
  @media(max-width: 500px) {
    flex-wrap: wrap;
    flex-direction: column;
    align-items: flex-start;
  }
`;

const SwitchWrapper = styled.div`
  margin: 5px 0;
  @media(max-width: 500px) {
    width: 100%;
  }
`;

const enterPressed = f => e => e.keyCode === 13 ? f(e) : null;


let $text = null;
function AngBar({ totalLines, ang, isBookmarked, larivaar, larivaarAssist, showTranslation, ...events }) {
  const handleSetAng = ({ target: { value } }) => {
    if (value < MIN_ANG) {
      events.onSetAng(MIN_ANG);
    } else if (value > MAX_ANG) {
      events.onSetAng(MAX_ANG);
    } else {
      events.onSetAng(parseInt(Number(value)))
    }
  };

  if ($text) {
    findDOMNode($text).value = ang;
  }

  return (
    <Toolbar title={`Sri Guru Granth Sahib`}>
      <Wrapper>
        <ButtonList style={{ justifyContent: 'space-around' }}>
          <Button title="Bookmark" onClick={events.onToggleBookmark}><Bookmark isBookmarked={isBookmarked} /></Button>

          <Button disabled={totalLines === 0 || ang === MIN_ANG} onClick={events.onDecrementAng} title="Previous" >
            <Previous />
          </Button>

          <Textfield
            disabled={totalLines === 0}
            center
            size={60}
            placeholder={String(ang)}
            onKeyDown={enterPressed(handleSetAng)}
            onBlur={handleSetAng}
            ref={d => ($text = d)}
            type="number"
            min={MIN_ANG}
            max={MAX_ANG}
            defaultValue={ang}
          />

          <Button disabled={totalLines === 0 || ang === MAX_ANG} onClick={events.onIncrementAng} title="Next">
            <Next />
          </Button>
          <Button size={13} title="Random Ang" onClick={events.onRandomAng}>
            <Random />
          </Button>
        </ButtonList>

        <SwitchList>
          <SwitchWrapper>
            <Switch right defaultChecked={larivaar} checked={larivaar} onChange={events.onToggleLarivaar}>
              Larivaar
            </Switch>
          </SwitchWrapper>

          <SwitchWrapper>
            <Switch right defaultChecked={larivaarAssist} checked={larivaarAssist} onChange={events.onToggleLarivaarAssist} disabled={!larivaar}>
              <span>Larivaar<Orange>Assist</Orange></span>
            </Switch>
          </SwitchWrapper>

          <SwitchWrapper>
            <Switch right defaultChecked={showTranslation} checked={showTranslation} onChange={events.onToggleTranslation}>
              English Translation
            </Switch>
          </SwitchWrapper>
        </SwitchList>
      </Wrapper>
    </Toolbar>
  )
};

const shouldComponentUpdate = notEqualsSome([
  'totalLines', 'ang', 'isBookmarked', 'larivaar', 'larivaarAssist', 'showTranslation',
]);

export default shouldComponentUpdateEnhancer(shouldComponentUpdate)(AngBar);