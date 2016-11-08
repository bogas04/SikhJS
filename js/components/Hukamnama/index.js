import React, { Component } from 'react';
import { Link } from 'react-router'; 
import { Button, Tabs, Tab } from 'react-mdl';

import Json from '../Json';
import Toolbar from '../Toolbar';

export class HukamnamaView extends Component {
  constructor(p) {
    super(p);
    this.state = { activeTab: 0 };
  }
  render() {
    const { ang, english, punjabi, gurbani, date, } = this.props;
    return <div>
      <Toolbar title={`Hukamnama ${date}`}>
        <Link to={`/SGGS/${ang}`}><Button ripple raised accent >{`Open Ang ${ang}`}</Button></Link>
        <Tabs activeTab={this.state.activeTab} onChange={activeTab => this.setState({ activeTab })} ripple>
          <Tab style={{ fontWeight: this.state.activeTab === 0 ? 900 : 100 }}> Hukam </Tab>
          <Tab style={{ fontWeight: this.state.activeTab === 1 ? 900 : 100 }}>English Translation</Tab>
        </Tabs>
      </Toolbar>
      <section style={{ padding: 20, lineHeight: '2em' }}>
        {
          this.state.activeTab === 0 
          ? <div className="gurbani-text">{gurbani}</div>
          : <div>{english}</div>
        }
      </section>
    </div>
  }
}

export default () => {
  const loadingText = <div style={{ fontSize: '6vw', margin: 10 }} className="gurbani-text">
    <p>su khu tl guru syvIAY Aihinis shij suBwie ]</p>
    <p>drsin prisAY gurU kY jnm mrx duKu jwie ]10]</p>
  </div>;

  return (
    <Json url={`https://mukhwakh.herokuapp.com/api`} loadingText={loadingText}>{
      ({ data: { data } }) => <HukamnamaView {...data} />
    }</Json>
  );
}
