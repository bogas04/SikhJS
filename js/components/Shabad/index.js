import React, { Component } from 'react';

import { withRouter } from 'react-router';
import { Icon, IconButton, Button, Switch } from 'react-mdl';

import { AuthorChip } from '../Author';
import { isBookmarked, toggleBookmark } from '../../bookmarks';
import Toolbar from '../Toolbar';
import Khajana, { TYPES, SOURCES } from '../Khajana';

export const ShabadView = withRouter(class extends Component {
  constructor(p) {
    super(p);

    const { id, gurbani, authorId, ang, source } = this.props;
    this.state = { 
      showTranslation: false,
      loading: true,
      unicode: false,
      isBookmarked: false,
      id, gurbani, authorId, ang, source
    };

    isBookmarked({ key: 'shabad', value: id })
      .then(isBookmarked => this.setState({ isBookmarked }))
      .catch(e => console.error(e));
  }
  render () {
    const { id, ang, authorId, gurbani, source, showTranslation, unicode, loading, isBookmarked } = this.state;
    const { router: { push } } = this.props;

    return <div>
      <Toolbar>
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center' }}>
          { authorId && <AuthorChip id={authorId} /> }
          <div>
            <Button raised accent={showTranslation} ripple onClick={e => this.toggleTranslation()}>Translation</Button>
            <Button raised colored={unicode} ripple onClick={e => this.toggleFont()}>Unicode Font</Button>
          </div>
          <div>
            {
              ang && <Button onClick={e => push(`/SGGS/${ang}`)} disabled={source.id !== 'G'} ripple raised colored accent>
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
        <div style={{ lineHeight: '2em', padding: 10 }}>{
          gurbani.map((e, i) => (
            <div key={e.shabad.id}>
              <span className="gurbani-text">{
                unicode
                  ? e.shabad.gurbani.unicode
                  : e.shabad.gurbani.gurmukhi
              }</span>
              {showTranslation && <blockquote>{e.shabad.translation.english.ssk}</blockquote>}
            </div>
          ))
        }</div>
    </div>
  </div>;
  }
  toggleTranslation() {
    this.setState({ showTranslation: !this.state.showTranslation });
  }
  toggleFont() {
    this.setState({ unicode: !this.state.unicode });
  }
  toggleBookmark() {
    const { isBookmarked, id, source, ang, lines } = this.state;
    const title =  `Shabad ${id} ${SOURCES[source.id]} Ang ${ang}`;

    toggleBookmark({ isBookmarked, title, key: 'shabad', value: id, })
      .then(isBookmarked => this.setState({ isBookmarked }))
      .catch(e => console.error(e));
  }
})

export default props => <Khajana options={{ id: props.id || props.params.id }} >{
  ({ data: { shabadinfo = {}, gurbani = [] } }) => (
    gurbani && gurbani.length > 0 && <ShabadView 
      id={props.id || props.params.id}
      gurbani={gurbani}
      ang={gurbani[0].shabad.PageNo}
      source={gurbani[0].shabad.source}
      authorId={shabadinfo.writer.id} 
    />
  )}
</Khajana>;
