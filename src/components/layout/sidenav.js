import React from 'react';

const WIDTH_TOGGLED_ON = 280;
const WIDTH_TOGGLED_OFF = 50;

class Sidenav extends React.PureComponent {
	constructor(props) {
		super(props);
		
		this.state = {
			isToggledOn: false
		};

		this.onToggled = this.onToggled.bind(this);
	}

	onToggled() {
		this.setState((prevState) => ({
			isToggledOn: !prevState.isToggledOn
		}))
	}

    render() {
        return (
			<div
				style={{ flexBasis: this.state.isToggledOn ? WIDTH_TOGGLED_ON : WIDTH_TOGGLED_OFF }}
				onClick={this.onToggled}
				className="bdss bdw0 bdrws bdc-gray-light"
			>
				<div className="fz16 phm pvm tac bdss bdw0 bdbws bdc-gray-light">
					{this.state.isToggledOn ? 'Anonymous' : 'A'}
				</div>
			</div>
		)
    }
}

export default Sidenav;
