import PropTypes from 'prop-types';
import React from 'react';
import { Toolbar, Markdown } from '../../components';
import shouldComponentUpdateEnhancer, { notEqualsSome } from '../../components/shouldComponentUpdateEnhancer';

function Author ({ match: { params: { id, name } } }) {
  return (
    <div>
      <Toolbar title={name} />
      <Markdown url={`assets/docs/md/authors/${id}.md`} />
    </div>
  );
}

Author.propTypes = {
  match: PropTypes.object,
};

export default shouldComponentUpdateEnhancer((c, n) => c.match.params.id !== n.match.params.id)(Author);