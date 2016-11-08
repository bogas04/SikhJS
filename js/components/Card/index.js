import React from 'react';

import { Card, CardTitle, CardText, CardActions, } from 'react-mdl';

const styles = {
  wrapper: {
    margin: 10,
  },
  title: {
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'space-between' 
  },
};

export default ({ title, text, actions = [] }) => (
  <Card style={styles.wrapper} shadow={0}>
    <CardTitle style={styles.title}>{title}</CardTitle>
    <CardText>{text}</CardText>
    <CardActions border>
      {actions.map((Action, i) => <div key={i}>{Action}</div>)}
    </CardActions>
  </Card>
);
