import React, { Component } from 'react';

import { withRouter } from 'react-router';

import { AuthorChip } from '../Author';
import { API_URL, sourceTypes, sourceIds } from '../../constants';
import { isBookmarked, toggleBookmark } from '../../bookmarks';

import { Icon, IconButton, Button, Switch } from 'react-mdl';
import Toolbar from '../Toolbar';
import Loader from '../Loader';

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
      isBookmarked: false,
    };

    isBookmarked({ key: 'shabad', value: this.state.id })
      .then(isBookmarked => this.setState({ isBookmarked }))
      .catch(e => console.error(e));
  }
  render () {
    const { id, authorId, ang, sourceId, lines, showTranslation, unicode, loading, isBookmarked } = this.state;
    const { router: { push } } = this.props;

    return (
      <div>
        <Toolbar>
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center' }}>
            { authorId && <AuthorChip id={authorId} /> }
            <div>
              <Button raised accent={showTranslation} ripple onClick={e => this.toggleTranslation()}>Translation</Button>
              <Button raised colored={unicode} ripple onClick={e => this.toggleFont()}>Unicode Font</Button>
            </div>
            <div>
              {
                ang && <Button onClick={e => push(`/SGGS/${ang}`)} disabled={sourceId !== 'G'} ripple raised colored accent>
                  {`Open Ang ${ang}`}
                </Button>
              }
              <Button raised ripple onClick={e => this.toggleBookmark()} raised colored>
                <Icon name={ isBookmarked ? 'star' : 'stars' } /> { isBookmarked ? 'Bookmarked' : 'Bookmark' }
              </Button>
            </div>
          </div>
        </Toolbar>
        <div style={{ textAlign: 'center' }}>
          <Loader loading={loading}>
            <div style={{ lineHeight: '2em', padding: 10 }}>
              {
                lines.map((e, i) => <div key={e.shabad.ID}>
                  <span className="gurbani-text">{unicode ? e.shabad.GurmukhiUni : e.shabad.Gurmukhi}</span>
                  {showTranslation && <div style={{ color: 'grey' }}>{e.shabad.English}</div>}
                </div>)
              }
            </div>
          </Loader>
        </div>
      </div>
    );
  }
  toggleTranslation() {
    this.setState({ showTranslation: !this.state.showTranslation });
  }
  toggleFont() {
    this.setState({ unicode: !this.state.unicode });
  }
  toggleBookmark() {
    const { isBookmarked, id, sourceId, ang, lines } = this.state;
    const title =  `Shabad ${id} ${sourceTypes[sourceIds[sourceId]]} Ang ${ang}`;

    toggleBookmark({ isBookmarked, title, key: 'shabad', value: id, })
      .then(isBookmarked => this.setState({ isBookmarked }))
      .catch(e => console.error(e));
  }
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
})
