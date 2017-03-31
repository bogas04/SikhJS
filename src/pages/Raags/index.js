import React, { Component } from 'react';

import Toolbar from '../../components/Toolbar';

import Json from '../../components/Json';

import CardView from '../../components/Card';

import Textfield from '../../components/Textfield';

import LinkButton from '../../components/LinkButton';

export const RaagsView = ({ keyword }) => {
  const View = ({ data = [] }) => {
    let raags = data;

    if (keyword !== '') {
      raags = raags.filter(e => e.raag.toLowerCase().indexOf(keyword.toLowerCase()) > -1);
    }

    return (
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', flexDirection: 'column', padding: '0 10vw' }}>
        {
          raags.map(({ raag, gurmukhi, granth, id, ang }) => (
            <CardView
              key={id}
              title={`${raag} ${gurmukhi}`}
              actions={[
                granth !== 1 || ang === 0
                ? ''
                : <LinkButton key={0} to={`/SGGS/${ang}`}>{`Open Ang ${ang}`}</LinkButton>,
                <LinkButton key={1} to={`/raags/${id}`}>More Info</LinkButton>,
              ]}
            />
          ))
        }
      </div>
    );
  };

  View.propTypes = {
    data: React.PropTypes.array,
  };

  return View;
};

export default class Raags extends Component {
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
        <Toolbar title="Raags">
          <Textfield
            placeholder="Search"
            onChange={this.handleKeyword}
          />
        </Toolbar>

        <Json url={`assets/docs/json/raags.json`}>{RaagsView({ keyword })}</Json>
      </div>
    );
  }
}

