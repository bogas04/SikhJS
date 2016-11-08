import React, { Component } from 'react';

import { Link } from 'react-router';
import { Throttle } from 'react-throttle';

import { Textfield, Button, } from 'react-mdl';

import Toolbar from '../Toolbar';
import Json from '../Json';
import Card from '../Card';


export const RaagsView = ({ keyword }) => ({ data = [] }) => {
  let raags = data;

  if (keyword !== '') {
    raags = raags.filter(e => e.raag.toLowerCase().indexOf(keyword.toLowerCase()) > -1);
  }

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', flexDirection: 'row' }}>
      {
        raags.map(({ raag, gurmukhi, granth, id, ang }) => (
          <Card key={id} title={`${raag} ${gurmukhi}`} actions={[
            granth !== 1 || ang === 0 ? '' : <Link to={`/SGGS/${ang}`}><Button>{`Open Ang ${ang}`}</Button></Link>,
            <Link to={`/raag/${id}`}><Button>More Info</Button></Link>,
          ]} />
        ))
      }
    </div>
  );
};

export default class Raags extends Component {
  constructor(p) {
    super(p);
    this.state = { keyword: '' };
  }
  updateKeyword(keyword) {
    this.setState({ keyword });
  }
  render() {
    let { keyword } = this.state;

    return (
      <div>
        <Toolbar title="Raags">
          <Throttle time={500} handler="onChange">
            <Textfield label="Search" floatingLabel onChange={e => this.updateKeyword(e.target.value)}
              style={{ width: 300 }} />
          </Throttle>
        </Toolbar>

        <Json url={`docs/json/raags.json`}>{RaagsView({ keyword })}</Json>
      </div>
    );
  }
}

