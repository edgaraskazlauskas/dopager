import React from 'react';
import TodoItem from './../todo-item';

const TodoList = ({ todos = [], onClickedToggle, onClickedDelete, onClickedMove }) => (
    <div>
        {todos.map((todo) => (
            <TodoItem
                key={todo.id}
                value={todo.description}
                completed={todo.completed}
                onClickedToggle={() => onClickedToggle(todo.id)}
                onClickedDelete={() => onClickedDelete(todo.id)}
                onClickedMove={() => onClickedMove(todo.id)}
            />
        ))}
    </div>
)

export default TodoList;
