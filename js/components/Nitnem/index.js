import React, { Component } from 'react';
import { Link } from 'react-router';
import { baanies } from '../../constants';

export default ({  }) => {
  const content = {
    nitnem: baanies.nitnem.map(e => ( <li key = {e}><Link className = 'btn-lg' to = {`/nitnem/${e}`}> {e} </Link></li>)),
    others: baanies.others.map(e => ( <li key = {e}><Link className = 'btn-lg' to = {`/nitnem/${e}`}> {e} </Link></li>))
  };
  return (
    <div>
      <h1 className="gurbani-text">Œ Ç ‰</h1>
      <h2> Nitnem </h2>
      <ul className = "list-unstyled"> {content.nitnem} </ul>
      <h2> Other Baanies </h2>
      <ul className = "list-unstyled"> {content.others} </ul>
    </div>
  );
}
