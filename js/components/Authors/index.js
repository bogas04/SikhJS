import React, { Component } from 'react';

import { Link } from 'react-router';
import { Throttle } from 'react-throttle';

import { Textfield, Button, } from 'react-mdl';

import Json from '../Json';
import Toolbar from '../Toolbar';
import Card from '../Card';

export const AuthorsView = ({ keyword }) => ({ data = [] }) => {
  let authors = data;

  if (keyword !== '') {
    authors = authors.filter(e => e.author.toLowerCase().indexOf(keyword.toLowerCase()) > -1);
  }

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', flexDirection: 'row' }}>
      {
        authors.map(author => (
          <Card key={author.id} title={`${author.author} ${author.gurmukhi}`} actions={[
            <Link to={`/author/${author.id}`}><Button>More Info</Button></Link>,
          ]} />
        ))
      }
    </div>
  );
};

export default class Authors extends Component {
  constructor(p) {
    super(p);
    this.state = { keyword: '' };
  }
  updateKeyword(keyword) { this.setState({ keyword }); }
  render() {
    let { keyword } = this.state;

    return (
      <div>
        <Toolbar title="Authors">
          <Throttle time={500} handler="onChange">
            <Textfield label="Search" floatingLabel onChange={e => this.updateKeyword(e.target.value)}
              style={{ width: 300 }} />
          </Throttle>
        </Toolbar>

        <Json url={`docs/json/authors.json`}>{AuthorsView({ keyword })}</Json>
      </div>
    );
  }
}
