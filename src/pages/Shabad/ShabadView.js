import PropTypes from 'prop-types';
import React from 'react';
import styled from 'react-emotion';
import { SOURCES } from 'khajana';
import { Link } from 'react-router-dom';
import { isBookmarked, toggleBookmark } from '../../bookmarks';
import { Chip, AuthorChip, Toolbar, Button } from '../../components/';
import { Bookmark, Share } from '../../components/Icons';
import { findShabadTitle } from '../../utils';
import pageTitleEnchancer from '../pageTitleEnchancer';
import Shabad from './Shabad';

const StyledLink = styled(Link)`
  display: block;
  text-decoration: none;
`;

const ToolbarWrapper = styled('div')`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: center;
  @media(max-width: 510px) {
    flex-direction: column;
    align-items: flex-start;
  }
  & a {
    margin: 10px 0;
  }
`;

const shareEnabled = 'share' in navigator;

class ShabadView extends React.PureComponent {
  constructor (p) {
    super(p);

    this.state = { isBookmarked: false };

    const { id } = this.props;

    isBookmarked({ key: 'shabad', value: id })
      .then(isBookmarked => this.setState({ isBookmarked }))
      .catch(err => console.error(err));

    this.handleToggleBookmark = this.handleToggleBookmark.bind(this);
    this.handleShareClick = this.handleShareClick.bind(this);
  }
  render () {
    const { ang, author, gurbani, source } = this.props;
    const { isBookmarked } = this.state;

    const toolbar = (
      <Toolbar>
        <ToolbarWrapper>
          <Button title="Bookmark" onClick={this.handleToggleBookmark}>
            <Bookmark isBookmarked={isBookmarked} />
          </Button>
          {
            shareEnabled && (
              <Button title="Share" onClick={this.handleShareClick}>
                <Share />
              </Button>
            )
          }
          {author && <AuthorChip style={{ display: 'block' }} {...author} />}
          {
            ang && (
              source.id === 'G'
                ? (
                  <StyledLink to={`/SGGS/${ang}`}>
                    <Chip>
                      {`${SOURCES[source.id]}:${ang}`}
                    </Chip>
                  </StyledLink>
                )
                : (
                  <Chip>
                    {`${SOURCES[source.id]}:${ang}`}
                  </Chip>
                )
            )
          }
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
    const { isBookmarked } = this.state;
    const { id, source, ang, gurbani: lines } = this.props;
    const title = findShabadTitle({ lines, id, ang, sourceName: SOURCES[source] });

    toggleBookmark({ isBookmarked, title, key: 'shabad', value: id })
      .then(isBookmarked => this.setState({ isBookmarked }))
      .catch(err => console.error(err));
  }
  handleShareClick () {
    const { id, source, ang, gurbani: lines } = this.props;
    const title = findShabadTitle({ lines, id, ang, sourceName: SOURCES[source] });
    const url = location.href;
    const text = lines
      .map(({ shabad }) => `${shabad.gurbani.unicode}\n  ${shabad.translation.english.ssk}\n`)
      .join('\n');

    if ('share' in navigator) {
      navigator.share({
        title,
        url,
        text,
      });
    }
  }
}

ShabadView.propTypes = {
  id: PropTypes.number,
  gurbani: PropTypes.array,
  author: PropTypes.object,
  ang: PropTypes.number,
  source: PropTypes.object,
};

const propsToShabadTitle = ({ id, source, ang, gurbani: lines }) => (
  findShabadTitle({ lines, id, ang, sourceName: SOURCES[source] })
);

export default pageTitleEnchancer(propsToShabadTitle)(ShabadView);
