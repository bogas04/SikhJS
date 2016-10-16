import React, { Component } from 'react';
import { Link } from 'react-router';
import { Card, CardHeader, CardText } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import { Tabs, Tab } from 'material-ui/Tabs';
import { baanies } from '../../constants';
import { AuthorChip } from '../Author';

export default ({  }) => {
  const BaaniCard = ({ title, info, author }) => <Card style={{ margin: 10 }} key={title}>
    <CardHeader
      title={title}
      subtitle={
        <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', }}>
          <Link to={`/nitnem/${title}`}><FlatButton primary label="Open" /></Link>
          {author.map(id => <AuthorChip key={id} id={id} />)}
        </div>
      }
      actAsExpander={true}
      showExpandableButton={true}
    />
    <CardText expandable={true}> {info || "No info"} </CardText>
  </Card>;

  const content = {
    nitnem: baanies.nitnem.map(e => <BaaniCard key={e.title} {...e} />),
    others: baanies.others.map(e => <BaaniCard key={e.title} {...e} />),
  };
  return (
    <Tabs style={{ backgroundColor: 'grey' }}>
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
}
