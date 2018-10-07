import React from 'react';

class VisibilityManager extends React.Component {
	constructor(props) {
		super(props);
		
		this.state = {
			isVisible: !!props.initiallyVisible
		};
		this.toggleVisibility = this.toggleVisibility.bind(this);
	}

	toggleVisibility() {
		this.setState(({ isVisible }) => ({
			isVisible: !isVisible
		}));
	}

	render() {
		return this.props.children({ toggleVisibility: this.toggleVisibility, isVisible: this.state.isVisible });
	}
}

export default VisibilityManager;
