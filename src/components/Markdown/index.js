import React from 'react';
import snarkdown from 'snarkdown';
import Fetch from '../Fetch';

/* eslint-disable react/no-danger */

export const Markdown = ({ text }) => <div dangerouslySetInnerHTML={{ __html: snarkdown(text) }} />;

Markdown.propTypes = {
  text: React.PropTypes.string,
};

export default function FetchAndMarkdown ({ style, className, ...props }) {
  return (<Fetch {...props}>{
    ({ data }) => {
      return (<div style={{ padding: 10, ...style }} className={className}>
        <Markdown text={data} dangerouslySetInnerHTML={{ __html: 's' }} />
      </div>);
    }
  }</Fetch>);
}

FetchAndMarkdown.propTypes = {
  className: React.PropTypes.string,
  style: React.PropTypes.object,
};
