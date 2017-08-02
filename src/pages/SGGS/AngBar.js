import React from 'react';
import styled from 'emotion/react';
import { Button, Switch, Toolbar, Textfield } from '../../components';
import { Bookmark, Previous, Next, Random } from '../../components/Icons';
import shouldComponentUpdateEnhancer, { notEqualsSome } from '../../components/shouldComponentUpdateEnhancer';
import Orange from './Orange';
import constants from './constants';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;

const ButtonList = styled(Wrapper)`
  flex-direction: row;
  padding-bottom: 5px;
`;

const ButtonWrapper = styled.div`
  margin: 0 40px;
`;

function AngBar ({ lines, ang, isBookmarked, larivaar, larivaarAssist, showTranslation, ...events }) {
  return (
    <Toolbar title={`Sri Guru Granth Sahib`}>
      <Wrapper>
        <Button title="Bookmark" onClick={events.onToggleBookmark}><Bookmark isBookmarked={isBookmarked} /></Button>

        <Wrapper>
          <Button disabled={lines.length === 0 || ang === constants.MIN_ANG} onClick={events.onDecrementAng} title="Previous" >
            <Previous />
          </Button>

          <Textfield
            disabled={lines.length === 0}
            center
            size={60}
            placeholder={String(ang)}
            onBlur={e => onSetAng(Number(e.target.value))}
            type="number"
            min={constants.MIN_ANG}
            max={constants.MAX_ANG}
            defaultValue={ang}
          />

          <Button disabled={lines.length === 0 || ang === constants.MAX_ANG} onClick={events.onIncrementAng} title="Next">
            <Next />
          </Button>
        </Wrapper>

        <Button size={13} title="Random Ang" onClick={events.onRandomAng}>
          <Random />
        </Button>

        <ButtonList>
          <ButtonWrapper>
            <Switch
              defaultChecked={larivaar}
              id="larivaar"
              onChange={events.onToggleLarivaar}
            >
              Larivaar
            </Switch>
          </ButtonWrapper>

          <ButtonWrapper>
            <Switch
              defaultChecked={larivaarAssist}
              id="larivaarAssist"
              onChange={events.onToggleLarivaarAssist}
              disabled={!larivaar}
            >
              <span>Larivaar<Orange text="Assist" /></span>
            </Switch>
          </ButtonWrapper>

          <ButtonWrapper>
            <Switch defaultChecked={showTranslation} id="translation" onChange={events.onToggleTranslation} >
              English Translation
            </Switch>
          </ButtonWrapper>
        </ButtonList>
      </Wrapper>
    </Toolbar>
  )
};

const shouldComponentUpdate = notEqualsSome([
  'lines', 'ang', 'isBookmarked', 'larivaar', 'larivaarAssist', 'showTranslation',
]);

export default shouldComponentUpdateEnhancer(shouldComponentUpdate)(AngBar);