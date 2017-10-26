import styled from 'emotion/react';

const defaultStyle = {
  textAlign: 'left',
  padding: '20px',
  lineHeight: '2em',
};

const enabledStyle = {
  ...defaultStyle,
  '& .line:nth-child(1)': {
    fontSize: '2em',
    lineHeight: '1.5',
    display: 'block',
    textAlign: 'center',
  },
  '& .line:nth-child(2)': {
    display: 'block',
    textAlign: 'center',
    fontSize: '1.25em',
  },
};

export default styled('div')(({ enabled }) => enabled ? enabledStyle : defaultStyle);
