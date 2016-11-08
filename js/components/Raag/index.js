import React, { Component } from 'react';
import { Link } from 'react-router';
import Toolbar from '../Toolbar';
import Json from '../Json';

export default ({ params: { id } }) => (
  <Json url={`docs/json/raags/${id}.json`}>{
    ({ data = [] }) => (
      <div>
        <Toolbar title={`${data.raag} ${data.gurmukhi}`} />
        <div style={{ padding: 10 }}>
          {data.description || 'No information'}
        </div>
      </div>
    )
  }</Json>
);
