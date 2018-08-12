import React from 'react';

const WIDTH_TOGGLED_ON = 280;
const WIDTH_TOGGLED_OFF = 50;

class Sidenav extends React.PureComponent {
	constructor(props) {
		super(props);
		
		this.state = {
			isToggledOn: true
		};

		this.onToggled = this.onToggled.bind(this);
		this.onClickedOpenCategories = this.onClickedOpenCategories.bind(this);
	}

	onToggled() {
		this.setState((prevState) => ({
			isToggledOn: !prevState.isToggledOn
		}))
	}

	onClickedOpenCategories() {
		this.onToggled();
		this.props.openCategoryList();
	}

    render() {
		const itemClassName = 'fz16 phm pvm tac bdss bdw0 bdbws bdc-gray-light';

        return (
			<div
				style={{ flexBasis: this.state.isToggledOn ? WIDTH_TOGGLED_ON : WIDTH_TOGGLED_OFF }}
				onClick={this.onToggled}
				className="bdss bdw0 bdrws bdc-gray-light fxg0 fxsh0"
			>
				{/* <div className={itemClassName}>
					{this.state.isToggledOn ? 'Anonymous' : 'A'}
				</div> */}

				<div className={itemClassName} onClick={this.onClickedOpenCategories}>
					{this.state.isToggledOn ? 'Categories' : 'C'}
				</div>
			</div>
		)
    }
}

export default Sidenav;
