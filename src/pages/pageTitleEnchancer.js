import React from 'react';

export default title => Component => class extends React.PureComponent {
  componentDidMount() {
    this.oldTitle = document.title;
    document.title = (typeof title === 'function' ? title(this.props) : title) + ' | SikhJS';
  }
  componentDidUpdate() {
    this.oldTitle = document.title;
    document.title = typeof title === 'function' ? title(this.props) : title;
  }
  componentWillUnmount() {
    document.title = this.oldTitle;
  }
  render() {
    return <Component {...this.props} />
  }
};