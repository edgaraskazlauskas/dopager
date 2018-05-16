import React from 'react';
import TodoItem from './../todo-item';

const TodoList = ({ todos = [] }) => (
    <div>
        {todos.map((todo) => <TodoItem key={todo.id} value={todo.description} />)}
    </div>
)

export default TodoList;
