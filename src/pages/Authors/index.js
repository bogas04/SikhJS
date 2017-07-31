import PropTypes from 'prop-types';
import React, { Component } from 'react';

import Toolbar from '../../components/Toolbar';

import Json from '../../components/Json';

import CardView from '../../components/Card';

import Textfield from '../../components/Textfield';

import LinkButton from '../../components/LinkButton';

export const AuthorsView = ({ keyword }) => {
  const View = ({ data = [] }) => {
    let authors = data;

    if (keyword !== '') {
      authors = authors.filter(e => e.author.toLowerCase().indexOf(keyword.toLowerCase()) > -1);
    }

    return (
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', flexDirection: 'column', padding: '0 10vw' }}>
        {
          authors.map(author => (
            <CardView
              key={author.id}
              title={`${author.author} ${author.gurmukhi}`}
              actions={[
                <LinkButton key={0} to={`/authors/${author.id}`}>More Info</LinkButton>,
              ]}
            />
          ))
        }
      </div>
    );
  };

  View.propTypes = {
    data: PropTypes.array,
  };

  return View;
};

export default class Authors extends Component {
  constructor (p) {
    super(p);
    this.state = { keyword: '' };
    this.handleKeyword = this.handleKeyword.bind(this);
  }
  handleKeyword (e) {
    const keyword = e.currentTarget.value;
    this.setState({ keyword });
  }
  render () {
    let { keyword } = this.state;

    return (
      <div>
        <Toolbar title="Authors">
          <Textfield
            placeholder="Search"
            onChange={this.handleKeyword}
          />
        </Toolbar>

        <Json url={`assets/docs/json/authors.json`}>{AuthorsView({ keyword })}</Json>
      </div>
    );
  }
}
