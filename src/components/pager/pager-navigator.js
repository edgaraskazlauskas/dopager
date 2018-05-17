import * as React from 'react';
import TextPager from './../text-pager';

const KEY_ARROW_LEFT = 37;
const KEY_ARROW_RIGHT = 39;

class PagerNavigator extends React.Component {
    keyListener;

    componentDidMount() {
        this.keyListener = window.addEventListener('keyup', (event) => {
            if (event.keyCode === KEY_ARROW_LEFT) {
                this.props.onArrowLeftClicked();
            }

            if (event.keyCode === KEY_ARROW_RIGHT) {
                this.props.onArrowRightClicked();
            }
        })
    }

    componentWillUnmount() {
        this.keyListener();
    }

    render() {
        return <TextPager />;
    }
}

export default PagerNavigator;
