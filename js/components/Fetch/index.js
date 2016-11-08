import React, { Component } from 'react';
import Loader from '../Loader';

export default class Fetch extends Component {
  constructor (props) {
    super (props);
    this.state = { data: this.props.initialValue, loading: true };
    this.update(this.props);
  }
  componentWillReceiveProps(props) {
    this.setState({ loading: true });
    this.update(props);
  }
  update(props) {
    const { url, initialValue = '', transform = r => r.text() } = props;
    fetch(url).then(transform).then(data => this.setState({ data, loading: false }));
  }
  render () {
    const { url, transform, children, showLoader = true, loadingText = '', ...rest } = this.props;
    const { loading, data } = this.state;
    return (
      showLoader
      ? <Loader loading={loading} loadingText={loadingText}>{children({ ...rest, data })}</Loader>
      : children({ ...rest, loading, data })
    );
  }
}

