import React, { Component } from 'react';
import Button from 'material-ui/FlatButton';
import { withRouter } from 'react-router';
import { Toolbar, ToolbarGroup, ToolbarTitle } from 'material-ui/Toolbar';
import { Tabs, Tab } from 'material-ui/Tabs';
import Progress from 'material-ui/CircularProgress';

export const HukamnamaView = withRouter(({ ang, english, punjabi, gurbani, date }) => (
  <div>
    <Toolbar className='toolbar'>
      <ToolbarGroup firstChild={true}>
        <ToolbarTitle className='toolbar-title' text={`Hukamnama ${date}`} />
      </ToolbarGroup>
      <ToolbarGroup>
        <Button label={`Open Ang ${ang}`} onTouchTap={e => push(`/SGGS/${ang}`)} />
      </ToolbarGroup>
    </Toolbar>
    <Tabs tabItemContainerStyle={{ backgroundColor: 'grey' }}>
      <Tab label="Hukam"> <div style={{ padding: 20 }} className="gurbani-text">{gurbani}</div> </Tab>
      <Tab label="English Translation"> <div style={{ padding: 20 }}> {english} </div></Tab>
      <Tab label="Punjabi Translation"> <div style={{ padding: 20 }} className="gurbani-text">{punjabi}</div> </Tab>
    </Tabs>
  </div>
));

export default class Hukamnama extends Component {
  constructor(p) {
    super(p);
    this.state = { data: {}, loading: true };
    fetch(`https://mukhwakh.herokuapp.com/api`).then(r => r.json())
      .then(({ data }) => this.setState({ data, loading: false }))
      .catch(err => console.error(err));
  }
  render() {
    const { data, loading } = this.state;
    const Loader = () => <div>
      <div style={{ fontSize: '4em', margin: 10 }} className="gurbani-text">
        <p>su khu tl guru syvIAY Aihinis shij suBwie ]</p>
        <p>drsin prisAY gurU kY jnm mrx duKu jwie ]10]</p>
      </div>
      <Progress size={100} thickness={5} />
    </div>;
    return (
      <div style={{ textAlign: 'center' }}>
        {
          this.state.loading
          ? <Loader />
          : <HukamnamaView {...data} />
        }
      </div>
    );
  }
}

