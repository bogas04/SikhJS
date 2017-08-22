import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'emotion/react';
import { BOOKMARK_TYPES } from '../../constants';
import { clearAllBookmarks, getAllBookmarks, updateBookmarkTitle } from '../../bookmarks';
import { Textfield, Button, Toolbar, Loader } from '../../components';
import { Card, CardText, CardActions, CardTitle } from '../../components/Card';

const { SGGS, SHABAD } = BOOKMARK_TYPES;

const SearchCardWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  align-items: center;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: teal;
  cursor: pointer;
`;

const SearchCard = ({ data: { title, key, value }, onTitleChange }) => (
  <Card style={{ width: '30vw' }}>
    <CardTitle style={{ textTransform: 'capitalize' }}>{title}</CardTitle>

    <CardText>
      Edit Title <Textfield className="input" label={title} onChange={onTitleChange} type="text" defaultValue={title} />
    </CardText>

    <CardActions>
      {key === SHABAD && <StyledLink to={`/shabads/${value}`}>Open Shabad</StyledLink>}
      {key === SGGS && <StyledLink to={`/SGGS/${value}`}>Open Ang {value}</StyledLink>}
    </CardActions>
  </Card>
);

SearchCard.propTypes = {
  data: PropTypes.object,
  onTitleChange: PropTypes.func,
};

const SearchCards = ({ items, onTitleChange }) => (
  <SearchCardWrapper>
    {
      items
        .map(b => (
          <SearchCard
            data={b}
            key={b.id}
            onTitleChange={({ currentTarget: { value: title = b.title } }) => onTitleChange({ ...b, title })}
          />
        ))
    }
  </SearchCardWrapper>
);

export default class Bookmarks extends Component {
  constructor (p) {
    super(p);

    this.state = {
      bookmarks: [],
      loading: true,
      keyword: '',
    };

    getAllBookmarks()
      .then(bookmarks => this.setState({ bookmarks, loading: false }))
      .catch(err => console.error(err));

    this.handleUpdateBookmark = this.handleUpdateBookmark.bind(this);
    this.handleClearAllBookmarks = this.handleClearAllBookmarks.bind(this);
    this.handleUpdateKeyword = this.handleUpdateKeyword.bind(this);
  }
  render () {
    let { loading, bookmarks, keyword } = this.state;

    if (keyword !== '') {
      bookmarks = bookmarks.filter(e => e.title.toLowerCase().indexOf(keyword.toLowerCase()) > -1);
    }


    return (
      <div>

        <Toolbar title={`Bookmarks`}>
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Textfield onChange={this.handleUpdateKeyword} placeholder="Search" />
            <Button noBorder onClick={this.handleClearAllBookmarks}>Clear All Bookmarks</Button>
          </div>
        </Toolbar>

        <Loader loading={loading}>{
          bookmarks.length === 0
            ? <h1 style={{ textAlign: 'center' }}>No Bookmarks Found</h1>
            : <SearchCards items={bookmarks} onTitleChange={this.handleUpdateBookmark} />
        }</Loader>
      </div>
    );
  }

  handleUpdateBookmark ({ key, value, id, timestamp, title }) {
    updateBookmarkTitle({ key, value, id, timestamp, title })
      .then(e => console.log(e))
      .catch(err => console.error(err));
  }

  handleClearAllBookmarks () {
    clearAllBookmarks()
      .then(() => this.setState({ bookmarks: [] }))
      .catch(err => console.error(err));
  }

  handleUpdateKeyword ({ currentTarget: { value: keyword }}) {
    this.setState({ keyword });
  }
}
