import React from 'react';
import TodoItem from './../todo-item';

const TodoList = ({ todos = [], onClickedSetInProgress, onClickedDelete, onClickedMove }) => (
    <div>
        {todos.map((todo) => (
            <TodoItem
                key={todo.id}
                value={todo.description}
                completed={todo.completed}
                isInProgress={todo.inProgress}
                onClickedSetInProgress={() => onClickedSetInProgress(todo.id)}
                onClickedDelete={() => onClickedDelete(todo.id)}
                onClickedMove={() => onClickedMove(todo.id)}
            />
        ))}
    </div>
)

export default TodoList;
