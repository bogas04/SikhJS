import React, { Component } from 'react';

import { withRouter } from 'react-router';
import { Throttle } from 'react-throttle';

import { Textfield, Button, Card, CardTitle, CardText, CardActions } from 'react-mdl';

import Toolbar from '../Toolbar';
import Loader from '../Loader';

export const SearchCard = withRouter(({ id, raag, gurmukhi, granth, ang, description, router: { push } }) => <Card style={{ margin: 10 }} shadow={0} >
  <CardTitle style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between' }}>
    {`${raag} ${gurmukhi}`}
  </CardTitle>
  <CardText>{description}</CardText>
  <CardActions border>
    <Button disabled={granth !== 1 && ang === 0} onClick={e => push(`/SGGS/${ang}`)}>{`Open Ang ${ang}`}</Button>
  </CardActions>
</Card>
);

export default class Raags extends Component {
  constructor(p) {
    super(p);
    this.state = { raags: [], loading: true, keyword: '' };
  }
  componentDidMount() {
    this.updateData();
  }
  updateData() {
    this.setState({ loading: true });
    fetch(`docs/json/raags.json`)
      .then(r => r.json())
      .then(raags => this.setState({ raags, loading: false }))
      .catch(e => console.error(e));
  }
  updateKeyword(keyword) {
    this.setState({ keyword });
  }
  render() {
    let { raags, loading, keyword } = this.state;

    if (keyword !== '') { raags = raags.filter(e => e.raag.toLowerCase().indexOf(keyword.toLowerCase()) > -1); }

    return (
      <div>
        <Toolbar title="Raags">
          <Throttle time={500} handler="onChange">
            <Textfield label="Search" floatingLabel onChange={e => this.updateKeyword(e.target.value)}
              style={{ width: 300 }} />
          </Throttle>
        </Toolbar>
        <Loader loading={loading}>
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', flexDirection: 'row' }}>
            {raags.map(raag => <SearchCard key={raag.id} {...raag} />)}
          </div>
        </Loader>
      </div>
    );
  }
}

