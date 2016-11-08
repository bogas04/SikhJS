import React, { Component } from 'react';
import { Link } from 'react-router';
import { Chip, Card, CardTitle, CardText } from 'react-mdl';

import Toolbar from '../Toolbar';
import Json from '../Json';

export const AuthorChip = ({ id }) => (
  <Link to={`/author/${id}`}>
    <Json url={`docs/json/authors/${id}.json`} showLoader={false}>{
      ({ loading = true, data = {} }) => (
        <Chip style={{ margin: 5 }} children={loading ? 'Loading' : `${data.author} ${data.gurmukhi}` } />
      )
    }</Json>
</Link>
);

export default ({ params: { id } }) => (
  <Json url={`docs/json/authors/${id}.json`}>{
    ({ data = [] }) => (
      <div>
        <Toolbar title={`${data.author} ${data.gurmukhi}`} />
        <div style={{ padding: 10, lineHeight: '1em' }}>
          {data.description || 'No information'}
        </div>
      </div>
    )
  }</Json>
);
