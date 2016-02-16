import React, { Component } from 'react';
import { baanies as _baanies } from '../../constants';

export default class Baanies extends Component {
  render () {
    let baanies = {
      nitnem: _baanies.nitnem.map(e => (
        <li key = {e}><Link className = 'btn-lg' to = {`/nitnem/${e}`}> {e} </Link></li>
      )),
      others: _baanies.others.map(e => (
        <li key = {e}><Link className = 'btn-lg' to = {`/nitnem/${e}`}> {e} </Link></li>
      ))
    };
    return (
      <div>
        <h1 style = {{fontFamily: 'gurmukhi_heavy'}} >Œ Ç ‰</h1>
        <h2> Nitnem </h2>
        <ul className = "list-unstyled">
          {baanies.nitnem}
        </ul>
        <h2> Other Baanies </h2>
        <ul className = "list-unstyled">
          {baanies.others}
        </ul>
      </div>
    );
  }
}
