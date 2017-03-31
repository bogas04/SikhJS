import React from 'react';

import Json from '../../components/Json';

export function HukamnamaView ({ ang, english, punjabi, gurbani, date }) {
  return (
    <div>
      <section style={{ padding: 20, lineHeight: '2em' }}>
        <div>{ang} {date}</div>
        <div className="gurbani-text">{gurbani}</div>
        <div className="english">{english}</div>
        <div className="gurbani-text">{punjabi}</div>
      </section>
    </div>
  );
}

HukamnamaView.propTypes = {
  ang: React.PropTypes.number,
  english: React.PropTypes.string,
  punjabi: React.PropTypes.string,
  gurbani: React.PropTypes.string,
  date: React.PropTypes.date,
};

export default () => {
  const loadingText = (<div style={{ fontSize: '6vw', margin: 10 }} className="gurbani-text">
    <p>su khu tl guru syvIAY Aihinis shij suBwie ]</p>
    <p>drsin prisAY gurU kY jnm mrx duKu jwie ]10]</p>
  </div>);

  return (
    <Json url={`https://mukhwakh.herokuapp.com/api`} loadingText={loadingText}>{
      ({ data: { data } }) => <HukamnamaView {...data} />
    }</Json>
  );
};
