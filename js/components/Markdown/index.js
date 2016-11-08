import React, { Component } from 'react';
import ReactMarkdown from 'react-remarkable';
import Fetch from '../Fetch';

export default ({ style, className, ...props }) => <Fetch {...props}>{
  ({ data }) => (
    <div style={{ padding: 10, ...style}} className={className}>
      <ReactMarkdown source={data} />
    </div>
  )
}</Fetch>;
