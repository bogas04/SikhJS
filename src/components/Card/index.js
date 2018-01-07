import PropTypes from 'prop-types';
import React from 'react';

import styled from 'react-emotion';

export const Card = styled.div`
  margin: 10px;
  padding: 5px;
  background-color: #fefefe;
  border-radius: 5px;
  box-shadow: 0px 0px 5px 0px grey;
  &:hover {
    box-shadow: 0px 0px 8px 0px grey;
  }
`;

export const CardTitle = styled.div`
  padding: 2px 5px;
  color: #080808;
  margin: 5px;
  font-weight: bold;
`;

const Text = styled.div`
  margin: 5px;
  color: #232323;
  padding: 5px;
`;

export const CardText = ({ enabled = true, ...props }) => {
  return enabled
    ? <Text {...props} />
    : null
  ;
};

CardText.propTypes = {
  enabled: PropTypes.bool,
};

export const CardActions = styled.div`
  border-top: ${props => props.border ? '1px solid lightgrey' : 'none'};
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 10px 5px;
  padding: 10px 5px 0px 5px;
  @media(max-width: 500px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const ComposedCard = ({ title, text, actions = [] }) => (
  <Card>
    <CardTitle>{title}</CardTitle>
    <CardText>{text}</CardText>
    <CardActions border>
      {actions.map((Action, i) => <div key={i}>{Action}</div>)}
    </CardActions>
  </Card>
);

ComposedCard.propTypes = {
  title: PropTypes.node,
  text: PropTypes.node,
  actions: PropTypes.array,
};

export default ComposedCard;
