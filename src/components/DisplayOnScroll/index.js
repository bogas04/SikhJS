import React from 'react';

export default class DisplayOnScroll extends React.PureComponent {
	constructor(p) {
		super(p);
		this.state = { shouldDisplay: true, timerId: null };
		this.scrollListener = this.scrollListener.bind(this);
	}
	componentDidMount() {
		window.addEventListener('scroll', this.scrollListener);
		this.timer();
	}
	componentWillUnmount() {
		window.removeEventListener('scroll', this.scrollListener);
	}
	timer() {
		const { hideAfterSeconds = 5 } = this.props;
		return setTimeout(
			() => this.setState({ shouldDisplay: false, timerId: null }),
			hideAfterSeconds * 1000
		);
	}
	scrollListener() {
		this.setState(({ timerId }) => timerId === null
			? { timerId: this.timer() }
			: { shouldDisplay: true }
		);
	}
	render() {
		return this.state.shouldDisplay
			? <div>{this.props.children}</div>
			: null
	}
}