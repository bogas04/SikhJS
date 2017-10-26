import React from 'react';

export default class DisplayOnScroll extends React.PureComponent {
  constructor (p) {
    super(p);
    this.state = { shouldDisplay: true, timerId: null };
    this.scrollListener = this.scrollListener.bind(this);
  }
  componentDidMount () {
    window.addEventListener('wheel', this.scrollListener);
  }
  componentWillUnmount () {
    window.removeEventListener('wheel', this.scrollListener);
  }
  scrollListener (e) {
    const threshold = 20;
    if (e.deltaY < -threshold) { // Up
      this.setState({ shouldDisplay: true });
    } else if (e.deltaY > threshold) { // Down
      this.setState({ shouldDisplay: false });
    }
  }
  render () {
    return this.state.shouldDisplay
			? this.props.children
			: null;
  }
}
