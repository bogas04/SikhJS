import React, { Component } from 'react';

import { withRouter } from 'react-router';

import { baanies } from '../../constants';
import { AuthorChip } from '../Author';

import Toolbar from '../Toolbar';

import { Tabs, Tab, Button, Card, CardTitle, CardText, CardActions } from 'react-mdl';

export const BaaniCard = withRouter(class extends Component {
  constructor(p) {
    super(p);
    this.state = { showMore: false };
  }
  render() {
    const { title, info, author, router: { push } } = this.props;
    return <Card style={{ margin: 10 }}>
      <CardTitle>{title}</CardTitle>
      <CardActions>
        <Button onClick={e => push(`/nitnem/${title}`)} ripple>Read</Button>
        <Button onClick={e => this.setState({ showMore: !this.state.showMore })} ripple>Info</Button>
      </CardActions>
      <CardText style={{ display: this.state.showMore ? 'block' : 'none' }}> 
        {author.map(id => <AuthorChip key={id} id={id} />)}
        <div children={info || "No info"} />
      </CardText>
    </Card>
  }
});

export default class Nitnem extends Component {
  constructor(p) {
    super(p);
    this.state = { activeTab: 0 };
  }
  render() {
    const content = {
      nitnem: baanies.nitnem.map(e => <BaaniCard key={e.title} {...e} />),
      others: baanies.others.map(e => <BaaniCard key={e.title} {...e} />),
    };

    return (
      <div>
        <Toolbar title={<span className="gurbani-text">Œ Ç ‰</span>}>
          <Tabs style={{  }} activeTab={this.state.activeTab} onChange={activeTab => this.setState({ activeTab })} ripple>
            <Tab style={{ fontWeight: this.state.activeTab === 0 ? 900 : 100 }}>Nitnem</Tab>
            <Tab style={{ fontWeight: this.state.activeTab === 1 ? 900 : 100 }}>Additional Baanies</Tab>
          </Tabs>
        </Toolbar>
        <section>
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'flex-start', flexDirection: 'row' }}>
            {this.state.activeTab === 0 ? content.nitnem : content.others}
          </div>
        </section>
      </div>
    );
  };
}
