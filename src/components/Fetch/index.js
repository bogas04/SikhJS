import PropTypes from 'prop-types';
import React, { Component } from 'react';
import Loader from '../Loader';

export default class Fetch extends Component {
  constructor (props) {
    super(props);
    this.state = { data: this.props.initialValue, loading: true };
    this.update(this.props);
  }
  shouldComponentUpdate (nextProps, nextState) {
    return this.props.url !== nextProps.url || this.state.loading !== nextState.loading;
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
  initialValue: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.object,
  ]),
  cache: PropTypes.oneOf([
    'default',
    'no-store',
    'reload',
    'no-cache',
    'force-cache',
  ]),
  url: PropTypes.string,
  transform: PropTypes.func,
  showLoader: PropTypes.bool,
  loadingText: PropTypes.string,
  children: PropTypes.func,
};
