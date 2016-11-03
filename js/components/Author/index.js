import React, { Component } from 'react';
import { Link } from 'react-router';
import { Chip, Card, CardTitle, CardText } from 'react-mdl';
import Toolbar from '../Toolbar';
import Loader from '../Loader';

export class AuthorChip extends Component {
  constructor(p) {
    super(p);
    this.state = { data: { author: '', gurmukhi: '' }, loading: true };
  }
  componentDidMount() {
    this.updateData();
  }
  updateData() {
    this.setState({ loading: true });
    fetch(`docs/json/authors/${this.props.id}.json`)
      .then(r => r.json())
      .then(data => this.setState({ data, loading: false }))
      .catch(e => console.error(e));
  }
  render() {
    const { data, loading } = this.state;
    return <Chip style={{ margin: 5 }}>
      { loading ? 'Loading' : `${data.author} ${data.gurmukhi}` }
    </Chip>;
  }
}

export default class Author extends Component {
  constructor(p) {
    super(p);
    this.state = { data: { author: '', gurmukhi: '' }, loading: true };
  }
  componentDidMount() {
    this.updateData();
  }
  updateData() {
    this.setState({ loading: true });
    fetch(`docs/json/authors/${this.props.params.id}.json`)
      .then(r => r.json())
      .then(data => this.setState({ data, loading: false }))
      .catch(e => console.error(e));
  }
  render () {
    const { data, loading } = this.state;
    return (
      <div>
        <Loader loading={loading}>
          <div>
            <Toolbar title={`${data.author} ${data.gurmukhi}`} />
            <div style={{ padding: 10 }}>
              {data.description || 'No information'}
            </div>
          </div>
        </Loader>
      </div>
    );
  }
}
