import PropTypes from 'prop-types';
import React from 'react';
import Parser from 'markdown';
import Fetch from '../Fetch';

/* eslint-disable react/no-danger */

export const Markdown = ({ text }) => <div dangerouslySetInnerHTML={{ __html: Parser.markdown.toHTML(text) }} />;

Markdown.propTypes = {
  text: PropTypes.string,
};

export default class FetchAndMarkdown extends React.PureComponent {
  render() {
    const { style, className, ...props } = this.props;
    return (
      <Fetch {...props}>{
        ({ data }) => {
          return (
            <div style={{ padding: 10, ...style }} className={className}>
              <Markdown text={data} dangerouslySetInnerHTML={{ __html: 's' }} />
            </div>
          );
        }
      }
      </Fetch>
    );
  }
}

FetchAndMarkdown.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
};
