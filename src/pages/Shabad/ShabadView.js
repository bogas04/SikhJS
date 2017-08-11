import PropTypes from 'prop-types';
import React from 'react';
import styled from 'emotion/react';
import { SOURCES } from 'khajana';
import { Link } from 'react-router-dom';
import { isBookmarked, toggleBookmark } from '../../bookmarks';
import { Chip, AuthorChip, Toolbar, LinkButton, Button } from '../../components/';
import Bookmark from '../../components/Icons/Bookmark';
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
`;

class ShabadView extends React.PureComponent {
  constructor (p) {
    super(p);

    this.state = { isBookmarked: false };

    const { id, ang, gurbani: lines, source } = this.props;

    isBookmarked({ key: 'shabad', value: id })
      .then(isBookmarked => this.setState({ isBookmarked }))
      .catch(err => console.error(err));

    this.handleToggleBookmark = this.handleToggleBookmark.bind(this);
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
          {author && <AuthorChip style={{ display: 'block' }} {...author} />}
          {
            ang && (
              <StyledLink to={`/SGGS/${ang}`} disabled={source.id !== 'G'}>
                <Chip>
                  {`SGGS:${ang}`}
                </Chip>
              </StyledLink>
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