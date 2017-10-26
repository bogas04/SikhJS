import PropTypes from 'prop-types';
import React from 'react';
import { Toolbar, Markdown } from '../../components';
import shouldComponentUpdateEnhancer from '../../components/shouldComponentUpdateEnhancer';

function Raag ({ match: { params: { id, name } } }) {
  return (
    <div>
      <Toolbar title={name} />
      <Markdown url={`assets/docs/md/raags/${id}.md`} />
    </div>
  );
}

Raag.propTypes = {
  match: PropTypes.object,
};

export default shouldComponentUpdateEnhancer((c, n) => c.match.params.id !== n.match.params.id)(Raag);
