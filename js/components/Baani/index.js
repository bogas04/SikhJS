import React from 'react';
import Markdown from '../Markdown';

export default ({ params: { baani } }) => (
  <Markdown url={`docs/md/${baani}.md`} className="gurbani-text" style={{ textAlign: 'center' }}/>
);
