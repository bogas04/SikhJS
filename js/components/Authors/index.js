import React, { Component } from 'react';

import {  Link } from 'react-router';
import { Throttle } from 'react-throttle';

import { Textfield, Card, CardTitle, CardActions, Button } from 'react-mdl';

import Toolbar from '../Toolbar';
import Loader from '../Loader';

export const SearchCard = ({ id, author, gurmukhi, description }) => <Card style={{ margin: 10 }} shadow={0}>
  <CardTitle style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between' }}>
    {`${author} ${gurmukhi}`}
  </CardTitle>
  <CardActions border>
    <Link to={`/author/${id}`}><Button>More Info</Button></Link>
  </CardActions>
</Card>;

export default class Authors extends Component {
  constructor(p) {
    super(p);
    this.state = { authors: [], loading: true, keyword: '' };
  }
  componentDidMount() {
    this.updateData();
  }
  updateData() {
    this.setState({ loading: true });
    fetch(`docs/json/authors.json`)
      .then(r => r.json())
      .then(authors => this.setState({ authors, loading: false }))
      .catch(e => console.error(e));
  }
  updateKeyword(keyword) {
    this.setState({ keyword });
  }
  render() {
    let { authors, loading, keyword } = this.state;

    if (keyword !== '') { authors = authors.filter(e => e.author.toLowerCase().indexOf(keyword.toLowerCase()) > -1); }

    return (
      <div>
        <Toolbar title="Authors">
          <Throttle time={500} handler="onChange">
            <Textfield label="Search" floatingLabel onChange={e => this.updateKeyword(e.target.value)}
              style={{ width: 300 }} />
          </Throttle>
        </Toolbar>
        <Loader loading={loading}>
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', flexDirection: 'row' }}>
            {authors.map(author => <SearchCard key={author.id} {...author} />)}
          </div>
        </Loader>
      </div>
    );
  }
}
