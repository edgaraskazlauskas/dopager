import React from 'react';
import { TextInput } from 'evergreen-ui';

const KEY_CODE_ENTER = 13;
const DEFAULT_INPUT_VALUE = '';

class TodoInput extends React.Component {
    static defaultProps = {
        placeholder: 'Enter something...',
        initialValue: DEFAULT_INPUT_VALUE
    }

    constructor(props) {
        super(props);

        this.handleKeyUp = this.handleKeyUp.bind(this);
        this.handleInputChanged = this.handleInputChanged.bind(this);
        this.setInputValue = this.setInputValue.bind(this);
        this.state = {
            value: props.initialValue
        };
    }

    handleInputChanged(event) {
        if (!event || !event.target) {
            return;
        }

        this.setInputValue(event.target.value);
    } 

    setInputValue(value) {
        this.setState({ value });
    }

    handleKeyUp(event) {
        if (event.keyCode !== KEY_CODE_ENTER) {
            return;
        }

        this.props.onFinished(this.state.value);
        this.setInputValue(DEFAULT_INPUT_VALUE);
    }

    render() {
        return (
            <TextInput
                placeholder={this.props.placeholder}
                value={this.state.value}
                onKeyUp={this.handleKeyUp}
                onChange={this.handleInputChanged}
            />
        )
    }
}

export default TodoInput;
