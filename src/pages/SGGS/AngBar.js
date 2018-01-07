import React from 'react';
import styled from 'react-emotion';
import { Button, Switch, Toolbar, Textfield } from '../../components';
import { Bookmark, Previous, Next, Random } from '../../components/Icons';
import { slide } from '../../components/BlockQuote';
import { enterPressed } from '../../utils';
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

const ButtonList = styled(Wrapper)`
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
  animation: ${slide} normal .25s;
  @media(max-width: 500px) {
    width: 100%;
  }
`;

function AngBar ({ totalLines, ang, isBookmarked, larivaar, larivaarAssist, showTranslation, ...events }) {
  const handleSetAng = ({ target: { value } }) => {
    if (value < MIN_ANG) {
      events.onSetAng(MIN_ANG);
    } else if (value > MAX_ANG) {
      events.onSetAng(MAX_ANG);
    } else if (value !== ang) {
      events.onSetAng(parseInt(Number(value)));
    }
  };

  return (
    <Toolbar title={`Sri Guru Granth Sahib`}>
      <Wrapper>
        <ButtonList style={{ justifyContent: 'space-around' }}>
          <Button title="Bookmark" onClick={events.onToggleBookmark}><Bookmark isBookmarked={isBookmarked} /></Button>

          <Button disabled={totalLines === 0 || ang === MIN_ANG} onClick={events.onDecrementAng} title="Previous" >
            <Previous />
          </Button>

          <Textfield
            key={ang}
            disabled={totalLines === 0}
            center
            size={60}
            placeholder={String(ang)}
            onKeyDown={enterPressed(handleSetAng)}
            onBlur={handleSetAng}
            defaultValue={ang}
            type="number"
            min={MIN_ANG}
            max={MAX_ANG}
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

          {larivaar && (
            <SwitchWrapper>
              <Switch right defaultChecked={larivaarAssist} checked={larivaarAssist} onChange={events.onToggleLarivaarAssist} disabled={!larivaar}>
                <span>Larivaar<Orange>Assist</Orange></span>
              </Switch>
            </SwitchWrapper>
          )}

          <SwitchWrapper>
            <Switch right defaultChecked={showTranslation} checked={showTranslation} onChange={events.onToggleTranslation}>
              English Translation
              </Switch>
          </SwitchWrapper>
        </SwitchList>
      </Wrapper>
    </Toolbar>
  );
}

const shouldComponentUpdate = notEqualsSome([
  'totalLines', 'ang', 'isBookmarked', 'larivaar', 'larivaarAssist', 'showTranslation',
]);

export default shouldComponentUpdateEnhancer(shouldComponentUpdate)(AngBar);
