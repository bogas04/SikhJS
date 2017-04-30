import React, { Component } from 'react';

import { SOURCES } from 'khajana';

import AuthorChip from '../../components/AuthorChip';

import { isBookmarked, toggleBookmark } from '../../bookmarks';

import Toolbar from '../../components/Toolbar';

import Khajana from '../../components/Khajana';

import LinkButton from '../../components/LinkButton';

import Button from '../../components/Button';

export class ShabadView extends Component {
  constructor (p) {
    super(p);

    const { id, gurbani, author, ang, source } = this.props;

    this.state = {
      showTranslation: false,
      loading: true,
      unicode: false,
      isBookmarked: false,
      id,
      gurbani,
      author,
      ang,
      source,
    };

    isBookmarked({ key: 'shabad', value: id })
      .then(isBookmarked => this.setState({ isBookmarked }))
      .catch(err => console.error(err));

    this.handleToggleTranslation = this.handleToggleTranslation.bind(this);
    this.handleToggleFont = this.handleToggleFont.bind(this);
    this.handleToggleBookmark = this.handleToggleBookmark.bind(this);
  }
  render () {
    const { ang, author, gurbani, source, showTranslation, unicode, isBookmarked } = this.state;

    const toolbar = (
      <Toolbar>
        <div style={{ width: '100%', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center' }}>
          <Button style={{ display: 'block' }} onClick={this.handleToggleTranslation}>Translation</Button>
          <Button style={{ display: 'block' }} onClick={this.handleToggleFont}>Unicode Font</Button>
          { author && <AuthorChip style={{ display: 'block' }} {...author} /> }
          {
            ang && (
              <LinkButton
                style={{ display: 'block' }} 
                to={`/SGGS/${ang}`}
                disabled={source.id !== 'G'}
              >
                {`Open Ang ${ang}`}
              </LinkButton>
            )
          }
          <Button style={{ display: 'block' }} onClick={this.handleToggleBookmark}>
            { isBookmarked ? 'Bookmarked' : 'Bookmark' }
          </Button>
        </div>
      </Toolbar>
    );

    const content = (
      <div style={{ textAlign: 'center' }}>
        <div style={{ lineHeight: '2em', padding: 10 }}>
          {
            gurbani
            .map(({ shabad }) => (
              <div key={shabad.id}>
                <span className="gurbani-text">
                  {
                    unicode
                      ? shabad.gurbani.unicode
                      : shabad.gurbani.gurmukhi
                  }
                </span>
                {
                  showTranslation && (
                    <blockquote>{shabad.translation.english.ssk}</blockquote>
                  )
                }
              </div>
            ))
          }
        </div>
      </div>
    );

    return (
      <div>
        {toolbar}
        {content}
      </div>
    );
  }
  handleToggleTranslation () {
    this.setState({ showTranslation: !this.state.showTranslation });
  }
  handleToggleFont () {
    this.setState({ unicode: !this.state.unicode });
  }
  handleToggleBookmark () {
    const { isBookmarked, id, source, ang } = this.state;
    const title = `Shabad ${id} ${SOURCES[source.id]} Ang ${ang}`;

    toggleBookmark({ isBookmarked, title, key: 'shabad', value: id })
      .then(isBookmarked => this.setState({ isBookmarked }))
      .catch(err => console.error(err));
  }
}

ShabadView.propTypes = {
  id: React.PropTypes.number,
  gurbani: React.PropTypes.array,
  author: React.PropTypes.object,
  ang: React.PropTypes.number,
  source: React.PropTypes.object,
};

const ComposedShabad = props => (
  <Khajana options={{ id: props.id || props.match.params.id }} cache="force-cache">{
    ({ data: { shabadinfo = {}, gurbani = [] } }) => (
      gurbani && gurbani.length > 0 && (
        <ShabadView
          id={parseInt(props.id || props.match.params.id, 10)}
          gurbani={gurbani}
          ang={parseInt(shabadinfo.pageno, 10)}
          source={shabadinfo.source}
          author={{ ...shabadinfo.writer, id: parseInt(shabadinfo.writer.id, 10) }}
        />
      )
    )}
  </Khajana>
);

ComposedShabad.propTypes = {
  id: React.PropTypes.string,
  match: React.PropTypes.object,
};

export default ComposedShabad;
