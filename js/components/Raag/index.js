import React, { Component } from 'react';
import { Link } from 'react-router';
import Toolbar from '../Toolbar';
import Loader from '../Loader';

export default class Raag extends Component {
  constructor(p) {
    super(p);
    this.state = { data: { raag: '', gurmukhi: '' }, loading: true };
  }
  componentDidMount() {
    this.updateData();
  }
  updateData() {
    this.setState({ loading: true });
    fetch(`docs/json/raags/${this.props.params.id}.json`)
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
            <Toolbar title={`${data.raag} ${data.gurmukhi}`} />
            <div style={{ padding: 10 }}>
              {data.description || 'No information'}
            </div>
          </div>
        </Loader>
      </div>
    );
  }
}
