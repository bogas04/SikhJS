import React, { Component } from 'react';

import { withRouter } from 'react-router';
import { Icon, IconButton, Button, Switch } from 'react-mdl';

import { AuthorChip } from '../Author';
import { isBookmarked, toggleBookmark } from '../../bookmarks';
import Toolbar from '../Toolbar';
import GurbaniNow, { TYPES, SOURCES } from '../GurbaniNow';

export const ShabadView = withRouter(class extends Component {
  constructor(p) {
    super(p);

    const { id, gurbani, authorId, ang, sourceId } = this.props;
    this.state = { 
      showTranslation: false,
      loading: true,
      unicode: false,
      isBookmarked: false,
      id, gurbani, authorId, ang, sourceId
    };

    isBookmarked({ key: 'shabad', value: id })
      .then(isBookmarked => this.setState({ isBookmarked }))
      .catch(e => console.error(e));
  }
  render () {
    const { id, ang, authorId, gurbani, sourceId, showTranslation, unicode, loading, isBookmarked } = this.state;
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
        <div style={{ lineHeight: '2em', padding: 10 }}>
          {
            gurbani.map((e, i) => <div key={e.shabad.ID}>
              <span className="gurbani-text">{unicode ? e.shabad.GurmukhiUni : e.shabad.Gurmukhi}</span>
              {showTranslation && <blockquote>{e.shabad.English}</blockquote>}
            </div>)
          }
        </div>
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
    const { isBookmarked, id, sourceId, ang, lines } = this.state;
    const title =  `Shabad ${id} ${SOURCES[sourceId]} Ang ${ang}`;

    toggleBookmark({ isBookmarked, title, key: 'shabad', value: id, })
      .then(isBookmarked => this.setState({ isBookmarked }))
      .catch(e => console.error(e));
  }
})

export default props => <GurbaniNow options={{ id: props.id || props.params.id }}>{({ data: { gurbani = [] } }) => (
  gurbani && gurbani.length > 0 && <ShabadView 
    id={props.id || props.params.id}
    gurbani={gurbani}
    ang={gurbani[0].shabad.PageNo}
    sourceId={gurbani[0].shabad.SourceID}
    authorId={gurbani.slice(-1)[0].shabad.WriterID} 
  />
)}</GurbaniNow>;
