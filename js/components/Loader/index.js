import React from 'react';

import { Spinner } from 'react-mdl';

const styles = {
  div: {
    display: 'flex',
    justifyContent: 'center',
    margin: 20,
    padding: 20,
  },
  spinner: {
    height: 200,
    width: 200,
  }
};

export default ({ loading, children, loadingText = '' }) => loading
  ? <div>{loadingText}<div style={styles.div}><Spinner singleColor style={styles.spinner} /></div></div>
  : children
;
