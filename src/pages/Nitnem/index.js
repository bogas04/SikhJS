import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'emotion/react';
import { GurbaniFont, Button, AuthorChip, Toolbar } from '../../components';
import { Card, CardActions, CardText, CardTitle } from '../../components/Card';
import baanies from './constants';

const ShowMoreWrapper = styled.div`
  margin: 5px;
  padding: 5px;
`;

const InfoWrapper = styled.div`
  border-top: 1px solid lightgrey;
  margin: 5px;
  padding: 5px;
`;

export class BaaniCard extends Component {
  constructor (p) {
    super(p);
    this.state = { showMore: false };
    this.handleToggleShowMore = this.handleToggleShowMore.bind(this);
  }
  render () {
    const { title, info, author } = this.props;

    return (
      <Card>
        <CardTitle>{title}</CardTitle>
        <CardActions>
          <Link to={`/nitnem/${title}`}><Button ripple>Read</Button></Link>
          <Button onClick={this.handleToggleShowMore} ripple>Info</Button>
        </CardActions>
        <CardText enabled={this.state.showMore}>
          <ShowMoreWrapper>
            {author.map(id => <AuthorChip key={id} id={id} />)}
            <InfoWrapper>{info || 'No info'}</InfoWrapper>
          </ShowMoreWrapper>
        </CardText>
      </Card>
    );
  }
  handleToggleShowMore () {
    this.setState({
      showMore: !this.state.showMore,
    });
  }
}

BaaniCard.propTypes = {
  title: PropTypes.string,
  info: PropTypes.string,
  author: PropTypes.array,
};

const Wrapper = styled.section`
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  padding: 0 10vw;
`;

export default function Nitnem () {
  const content = [ ...baanies.nitnem, ...baanies.others ].map(e => <BaaniCard key={e.title} {...e} />);

  return (
    <div>
      <Toolbar title={<GurbaniFont inline>Œ Ç ‰</GurbaniFont>} />
      <Wrapper>
        {content}
      </Wrapper>
    </div>
  );
}
