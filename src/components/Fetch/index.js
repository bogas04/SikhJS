import React, { Component } from 'react';
import Loader from '../Loader';

export default class Fetch extends Component {
  constructor (props) {
    super(props);
    this.state = { data: this.props.initialValue, loading: true };
    this.update(this.props);
  }
  componentWillReceiveProps (props) {
    this.setState({ loading: true });
    this.update(props);
  }
  update (props) {
    const { url, transform = r => r.text(), cache = 'default' } = props;
    fetch(url, { cache })
      .then(transform)
      .then(data => this.setState({ data, loading: false }));
  }
  render () {
    const { children, showLoader = true, loadingText = '', ...rest } = this.props;
    const { loading, data } = this.state;

    return (
      showLoader
      ? <Loader loading={loading} loadingText={loadingText}>{children({ ...rest, data })}</Loader>
      : children({ ...rest, loading, data })
    );
  }
}

Fetch.propTypes = {
  initialValue: React.PropTypes.oneOfType([
    React.PropTypes.array,
    React.PropTypes.object,
  ]),
  cache: React.PropTypes.oneOf([
    'default',
    'no-store',
    'reload',
    'no-cache',
    'force-cache',
  ]),
  url: React.PropTypes.string,
  transform: React.PropTypes.func,
  showLoader: React.PropTypes.bool,
  loadingText: React.PropTypes.string,
  children: React.PropTypes.func,
};
