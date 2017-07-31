import PropTypes from 'prop-types';
import React, { Component } from 'react';

import { Link } from 'react-router-dom';

import styled from 'emotion/react';

import Toolbar from '../../components/Toolbar';

import Loader from '../../components/Loader';

import { clearAllBookmarks, getAllBookmarks, updateBookmarkTitle } from '../../bookmarks';

import { Card, CardActions, CardTitle } from '../../components/Card';

import Textfield from '../../components/Textfield';

import Button from '../../components/Button';

const SearchCard = ({ data, onTitleChange }) => {
  const { title, key, value } = data;

  const Wrapper = styled.div`
    display: flex;
    flexWrap: wrap;
    alignItems: center;
    justifyContent: space-between 
  `;

  return (
    <Card>
      <CardTitle>
        <Wrapper>
          <Textfield
            label={title}
            onChange={(e, v) => onTitleChange(v)}
            type="text"
            defaultValue={title}
          />
        </Wrapper>
      </CardTitle>
      <CardActions>
        { key === 'shabad' && <Link to={`/shabad/${value}`}><Button>Open Shabad</Button></Link> }
        { key === 'sggs' && <Link to={`/SGGS/${value}`}><Button>{`Open Ang ${value}`}</Button></Link> }
      </CardActions>
    </Card>
  );
};

SearchCard.propTypes = {
  data: PropTypes.object,
  onTitleChange: PropTypes.func,
};

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

    const SearchCards = ({ items }) => {
      const Wrapper = styled.div`
        display: flex;
        flexWrap: wrap;
        justifyContent: center;
        flexDirection: row
      `;

      return (<Wrapper>{
        items
          .map(b => (
            <SearchCard
              data={b}
              key={b.id}
              onTitleChange={(title = b.title) => this.updateBookmark({ ...b, title })}
            />
          ))
      }</Wrapper>);
    };

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
            : <SearchCards items={bookmarks} />
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

  handleUpdateKeyword (keyword) {
    this.setState({ keyword });
  }
}
