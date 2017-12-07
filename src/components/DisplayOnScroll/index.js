import React from 'react';

export default class DisplayOnScroll extends React.PureComponent {
  constructor (p) {
    super(p);
    this.state = { shouldDisplay: true, timerId: null };
    this.scrollListener = this.scrollListener.bind(this);
    this.touchListener = handleTouchMove(dir => this.setState(() => ({ shouldDisplay: dir < 0 })));
  }
  componentDidMount () {
    window.addEventListener('wheel', this.scrollListener);
    window.addEventListener('touchmove', this.touchListener);
  }
  componentWillUnmount () {
    window.removeEventListener('wheel', this.scrollListener);
    window.removeEventListener('touchmove', this.touchListener);
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

function handleTouchMove (cb) {
  let previousScreenY = 0;
  return e => {
    cb(previousScreenY - e.changedTouches[0].screenY);
    previousScreenY = e.changedTouches[0].screenY;
  };
}
