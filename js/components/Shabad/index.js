import React, { Component } from 'react';
import Toggle from 'material-ui/Toggle';
import Progress from 'material-ui/CircularProgress';
import { API_URL } from '../../constants';
import { Toolbar, ToolbarGroup, ToolbarTitle } from 'material-ui/Toolbar';

export default class Shabad extends Component {
  constructor(p) {
    super(p);
    this.state = { lines: [], showTranslation: false, loading: true, unicode: false };
  }
  toggleTranslation() { this.setState({ showTranslation: !this.state.showTranslation }); }
  toggleFont() { this.setState({ unicode: !this.state.unicode }); }
  componentDidMount () {
    const id = this.props.id || this.props.params.id;
    fetch(`${API_URL}?mode=2&shabadNo=${id}&format=json`).then(r => r.json())
      .then(({ gurbani = [] }) => this.setState({ lines: gurbani, loading: false }))
    //fetch(`/docs/json/hymns/Hymn ${id}.json`).then(r => r.json()).then(lines => this.setState({ lines }))
      .catch(err => console.error(err));
  }
  render () {
    const { lines, showTranslation, unicode, loading } = this.state;
    return (
      <div style={{ padding: 20 }}>
        <div style={{ display: 'flex', maxWidth: 400 }}>
          <Toggle style={{ display: 'flex', margin: 4 }} label="Show Translation" onToggle={e => this.toggleTranslation()}/>
          <Toggle style={{ display: 'flex', margin: 4 }} label="Unicode Font" onToggle={e => this.toggleFont()}/>
        </div>
        {
          loading
          ? <Progress size={100} thickness={5} />
          : lines.map((e, i) => <div key={e.shabad.ID}>
            <span className="gurbani-text">{unicode ? e.shabad.GurmukhiUni : e.shabad.Gurmukhi}</span>
            {showTranslation && <div style={{ color: 'grey' }}>{e.shabad.English}</div>}
          </div>)
        }
      </div>
    );
  }
}
