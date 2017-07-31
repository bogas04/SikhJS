import PropTypes from 'prop-types';
import React from 'react';
import Toolbar from '../../components/Toolbar';
import Json from '../../components/Json';

function Raag ({ match: { params: { id } } }) {
  return (
    <Json url={`assets/docs/json/raags/${id}.json`}>{
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
}

Raag.propTypes = {
  match: PropTypes.object,
};

export default Raag;
