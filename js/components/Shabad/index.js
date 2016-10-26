import React, { Component } from 'react';
import Toggle from 'material-ui/Toggle';
import Progress from 'material-ui/CircularProgress';
import Button from 'material-ui/FlatButton';
import { API_URL } from '../../constants';
import { Toolbar, ToolbarGroup, ToolbarTitle } from 'material-ui/Toolbar';
import { AuthorChip } from '../Author';
import { withRouter } from 'react-router';

export default withRouter(class Shabad extends Component {
  constructor(p) {
    super(p);
    this.state = { 
      lines: [],
      showTranslation: false,
      loading: true,
      unicode: false,
      id: this.props.id || this.props.params.id,
      authorId: this.props.WriterID || null,
      ang: this.props.PageNo || null,
    };
  }
  toggleTranslation() { this.setState({ showTranslation: !this.state.showTranslation }); }
  toggleFont() { this.setState({ unicode: !this.state.unicode }); }
  componentDidMount () {
    fetch(`${API_URL}?mode=2&shabadNo=${this.state.id}&format=json`).then(r => r.json())
      .then(({ gurbani = [] }) => this.setState({
        lines: gurbani,
        loading: false,
        authorId: this.state.authorId || gurbani.slice(-1)[0].shabad.WriterID,
        ang: gurbani[0].shabad.PageNo,
        sourceId: gurbani[0].shabad.SourceID,
      }))
      .catch(err => console.error(err));
  }
  render () {
    const { authorId, ang, sourceId, lines, showTranslation, unicode, loading } = this.state;
    const { router: { push }} = this.props;

    return (
      <div>
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around', alignItems: 'center', padding: '10px 0' }}>
          <div><Toggle label="Show Translation" onToggle={e => this.toggleTranslation()}/></div>
          <div>{authorId && <AuthorChip id={authorId} />}</div>
          <div>{ang && <Button label={`Open Ang ${ang}`} onTouchTap={e => push(`/SGGS/${ang}`)} disabled={sourceId !== 'G'} />}</div>
          <div><Toggle label="Unicode Font" onToggle={e => this.toggleFont()}/></div>
        </div>
        <div style={{ textAlign: 'center' }}>
          {
            loading
            ? <Progress size={100} thickness={5} />
            : lines.map((e, i) => <div key={e.shabad.ID}>
              <span className="gurbani-text">{unicode ? e.shabad.GurmukhiUni : e.shabad.Gurmukhi}</span>
              {showTranslation && <div style={{ color: 'grey' }}>{e.shabad.English}</div>}
            </div>)
          }
        </div>
      </div>
    );
  }
})
