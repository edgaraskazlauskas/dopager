import React from 'react';
import TodoList from './todo-list';
import TodoInput from './todo-input';

const INITIAL_ID = 1;

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
        this.setState((prevState) => {
            const lastTodoItem = prevState.todos[prevState.todos.length - 1];

            return {
                ...prevState,
                todos: [
                    ...prevState.todos,
                    {
                        id: !!lastTodoItem ? lastTodoItem.id + 1 : INITIAL_ID,
                        description: todo
                    }
                ]
            };
        });
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
