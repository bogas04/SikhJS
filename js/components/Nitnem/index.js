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
          <FlatButton primary label="Open" containerElement={<Link to={`/nitnem/${title}`}/>} /> 
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
    <div style={{ padding: '0 50px 50px 50px', textAlign: 'left' }}>
      <h1 className="gurbani-text" style={{ textAlign: 'center' }}>Œ Ç ‰</h1>
      <Tabs>
        <Tab label="Nitnem">
          {content.nitnem}
        </Tab>
        <Tab label="Additional Baanies">
          {content.others}
        </Tab>
      </Tabs>
    </div>
  );
}
