import PropTypes from 'prop-types';
import React from 'react';
import styled from 'emotion/react';
import { SOURCES } from 'khajana';
import { isBookmarked, toggleBookmark } from '../../bookmarks';
import { Chip, AuthorChip, Toolbar, LinkButton, Button } from '../../components/';
import { Link } from 'react-router-dom';
import Shabad from './Shabad';

const ToolbarWrapper = styled.div({
  width: '100%',
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'space-between',
  alignItems: 'center',
});

export default class ShabadView extends React.PureComponent {
  constructor (p) {
    super(p);

    const { id, gurbani, author, ang, source } = this.props;

    this.state = {
      loading: true,
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

    this.handleToggleBookmark = this.handleToggleBookmark.bind(this);
  }
  render () {
    const { ang, author, gurbani, source, isBookmarked } = this.state;

    const toolbar = (
      <Toolbar>
        <ToolbarWrapper>
          { author && <AuthorChip style={{ display: 'block' }} {...author} /> }
          {
            ang && (
              <Link style={{ display: 'block', textDecoration: 'none' }} to={`/SGGS/${ang}`} disabled={source.id !== 'G'}>
                <Chip>
                  {`SGGS:${ang}`}
                </Chip>
              </Link>
            )
          }
          <Button style={{ display: 'block' }} onClick={this.handleToggleBookmark}>
            { isBookmarked ? 'Bookmarked' : 'Bookmark' }
          </Button>
        </ToolbarWrapper>
      </Toolbar>
    );

    return (
      <div>
        {toolbar}
        {<Shabad gurbani={gurbani} />}
      </div>
    );
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
  id: PropTypes.number,
  gurbani: PropTypes.array,
  author: PropTypes.object,
  ang: PropTypes.number,
  source: PropTypes.object,
};