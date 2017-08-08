import React from 'react';
import { connect } from 'react-redux';
import { Night, Day } from '../../components/Icons';

function NightModeToggler({ nightMode }) {
  document.body.style.backgroundColor = nightMode ? '#212121' : '';
  document.body.style.color = nightMode ? 'white' : '';

  return nightMode ? <Night style={{ cursor: 'pointer' }} /> : <Day style={{ cursor: 'pointer' }} />;
};

const mapStateToProps = ({ nightMode }) => ({ nightMode });

export default connect(mapStateToProps, null)(NightModeToggler);