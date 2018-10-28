import React from 'react';
import TodoItem from './../todo-item';
import { Pane } from 'evergreen-ui';

const TodoList = ({ todos = [] }) => (
    <Pane>
        {todos.map((todoId) => (
            <TodoItem key={todoId} id={todoId} />
        ))}
    </Pane>
)

export default TodoList;
