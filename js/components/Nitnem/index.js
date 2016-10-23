import React, { Component } from 'react';
import { withRouter } from 'react-router';
import { Card, CardHeader, CardText } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import { Tabs, Tab } from 'material-ui/Tabs';
import { baanies } from '../../constants';
import { AuthorChip } from '../Author';

export const BaaniCard = withRouter(({ title, info, author, router: { push } }) => (
  <Card style={{ margin: 10 }} key={title}>
    <CardHeader title={<div>{title} <FlatButton label="Read" onTouchTap={e => push(`/nitnem/${title}`)}/></div>}
      showExpandableButton={true} actAsExpander={true} />
    <CardText expandable={true}> 
      {author.map(id => <AuthorChip key={id} id={id} />)}
      <div children={info || "No info"} />
    </CardText>
  </Card>
));

export default ({  }) => {
  const content = {
    nitnem: baanies.nitnem.map(e => <BaaniCard key={e.title} {...e} />),
    others: baanies.others.map(e => <BaaniCard key={e.title} {...e} />),
  };

  return (
    <Tabs tabItemContainerStyle={{ backgroundColor: 'grey' }}>
      <Tab label="Nitnem">
        <h1 className="gurbani-text" style={{ textAlign: 'center' }}>Œ Ç ‰</h1>
        <div style={{ padding: 50, textAlign: 'left' }}>{content.nitnem}</div>
      </Tab>
      <Tab label="Additional Baanies">
        <h1 className="gurbani-text" style={{ textAlign: 'center' }}>Œ Ç ‰</h1>
        <div style={{ padding: 50, textAlign: 'left' }}>{content.others}</div>
      </Tab>
    </Tabs>
  );
};
