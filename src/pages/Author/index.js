import React from 'react';

import Toolbar from '../../components/Toolbar';

import Json from '../../components/Json';

function Author ({ match: { params: { id } } }) {
  return (
    <Json url={`assets/docs/json/authors/${id}.json`}>{
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
}

Author.propTypes = {
  match: React.PropTypes.object,
};

export default Author;
