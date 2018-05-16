import React from 'react';
import TodoList from './todo-list';
import TodoInput from './todo-input';

class TodoListContainer extends React.Component {
    static defaultProps = {
        initialTodos: []
    }

    constructor(props) {
        super(props);

        this.onClickedAdd = this.onClickedAdd.bind(this);
        this.state = {
            todos: props.initialTodos
        }
    }

    onClickedAdd(todo) {
        this.setState((prevState) => ({
            ...prevState,
            todos: [
                ...prevState.todos,
                {
                    id: prevState.todos[prevState.todos.length - 1].id + 1,
                    description: todo
                }
            ]
        }))
    }

    render() {
        return (
            <div>
                <div className="mvm df fxdc">
                    <TodoInput onFinished={this.onClickedAdd} placeholder={'Enter a Todo Item...'} />
                </div>

                <TodoList todos={this.state.todos} />
            </div>
        )
    }
}

export default TodoListContainer;
