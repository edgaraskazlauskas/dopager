import React from 'react';
import Swipe from 'react-easy-swipe';

class Swipable extends React.Component {
    render() {
        return (
            <Swipe
                style={{ flexGrow: 1 }}
                onSwipeRight={this.props.onSwipeRight}
                onSwipeLeft={this.props.onSwipeLeft}
            >
                {this.props.children}
            </Swipe>
        );
    }
}

export default Swipable;
