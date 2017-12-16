import React from 'react';
import { connect } from 'react-redux';
import styled from 'react-emotion';
import { Toolbar, Switch } from '../../components';
import { SETTINGS } from '../../constants';
import { resetSettings, updateSetting } from '../../features/actions';

const { UNICODE, TRANSLATION, TRANSLITERATION } = SETTINGS;

const SettingsGroup = styled.div`
  margin: 5px;
`;

const HelpText = styled.div`
  margin: 2px 0px;
  padding: 5px 10px;
  font-size: 16px;
`;

class Settings extends React.PureComponent {
  constructor (p) {
    super(p);
    this.handleSettings = this.handleSettings.bind(this);
  }
  render () {
    return (
      <div>
        <Toolbar title="Settings" />

        <SettingsGroup>
          <Switch right defaultChecked={this.props.settings[UNICODE]} id={UNICODE} onChange={this.handleSettings(UNICODE)}>
            Unicode Font
          </Switch>
          <HelpText>
            Unicode lets you copy Gurmukhi test and share it on internet. However, it doesn't look quite as good.
          </HelpText>
        </SettingsGroup>

        <SettingsGroup>
          <Switch right defaultChecked={this.props.settings[TRANSLATION]} id={TRANSLATION} onChange={this.handleSettings(TRANSLATION)}>
            English Translation
          </Switch>
          <HelpText>
            This setting allows you to toggle english translations in search results.
          </HelpText>
        </SettingsGroup>

        <SettingsGroup>
          <Switch right defaultChecked={this.props.settings[TRANSLITERATION]} id={TRANSLITERATION} onChange={this.handleSettings(TRANSLITERATION)}>
            English Transliteration
          </Switch>
          <HelpText>
            This setting allows you to enable english transliteration in search results.
          </HelpText>
        </SettingsGroup>

        <SettingsGroup>
          <Switch right disabled id={'tl1'}>
            Translation Language
          </Switch>
          <HelpText>
            <i>Coming soon.</i>
          </HelpText>
        </SettingsGroup>

        <SettingsGroup>
          <Switch right disabled id={'tl2'}>
            Transliteration Language
          </Switch>
          <HelpText>
            <i>Coming soon.</i>
          </HelpText>
        </SettingsGroup>

      </div >
    );
  }
  handleSettings (key) {
    return () => this.props.updateSetting([ key, !this.props.settings[key] ]);
  }
}

const mapStateToProps = ({ settings }) => ({ settings });

const mapDispatchToProps = { updateSetting, resetSettings };

export default connect(mapStateToProps, mapDispatchToProps)(Settings);
