import PropTypes from 'prop-types';
import React from 'react';
import { GurbaniFont, Json } from '../../components';

export class HukamnamaView extends React.PureComponent {
  render() {
    const { ang, english, punjabi, gurbani, date } = this.props;
    return (
      <div>
        <section style={{ padding: 20, lineHeight: '2em' }}>
          <div>{ang} {date}</div>
          <GurbaniFont>{gurbani}</GurbaniFont>
          <div className="english">{english}</div>
          <GurbaniFont>{punjabi}</GurbaniFont>
        </section>
      </div>
    );
  }
}

HukamnamaView.propTypes = {
  ang: PropTypes.number,
  english: PropTypes.string,
  punjabi: PropTypes.string,
  gurbani: PropTypes.string,
  date: PropTypes.date,
};

const loadingText = (
  <GurbaniFont style={{ fontSize: '6vw', margin: 10 }}>
    <p>su khu tl guru syvIAY Aihinis shij suBwie ]</p>
    <p>drsin prisAY gurU kY jnm mrx duKu jwie ]10]</p>
  </GurbaniFont>
);

export default () => (
  <Json url={`https://mukhwakh.herokuapp.com/api`} loadingText={loadingText}>{
    ({ data: { data } }) => <HukamnamaView {...data} />
  }</Json>
);