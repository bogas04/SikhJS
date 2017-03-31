import React, { Component } from 'react';

import { Link } from 'react-router-dom';

import styled from 'styled-components';

import AuthorChip from '../../components/AuthorChip';

import Toolbar from '../../components/Toolbar';

import { Card, CardActions, CardText, CardTitle } from '../../components/Card';

import Button from '../../components/Button';

import GurbaniFont from '../../components/GurbaniFont';

import baanies from './constants';

export class BaaniCard extends Component {
  constructor (p) {
    super(p);
    this.state = { showMore: false };
    this.handleToggleShowMore = this.handleToggleShowMore.bind(this);
  }
  render () {
    const { title, info, author } = this.props;

    const ShowMoreWrapper = styled.div`
      margin: 5px;
      padding: 5px;
    `;

    const InfoWrapper = styled.div`
      border-top: 1px solid lightgrey;
      margin: 5px;
      padding: 5px;
    `;

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
  title: React.PropTypes.string,
  info: React.PropTypes.string,
  author: React.PropTypes.array,
};

export default function Nitnem () {
  const content = [ ...baanies.nitnem, ...baanies.others ].map(e => <BaaniCard key={e.title} {...e} />);

  const Wrapper = styled.section`
    display: flex;
    flex-flow: column wrap;
    justify-content: center;
    padding: 0 10vw;
  `;

  return (
    <div>
      <Toolbar title={<GurbaniFont inline>Œ Ç ‰</GurbaniFont>} />
      <Wrapper>
        {content}
      </Wrapper>
    </div>
  );
}
