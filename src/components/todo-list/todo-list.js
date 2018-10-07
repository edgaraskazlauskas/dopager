import React from 'react';
import TodoItem from './../todo-item';
import { Pane } from 'evergreen-ui';

const TodoList = ({ todos = [], onClickedSetInProgress, onClickedToggle, onClickedDelete, onClickedMove }) => (
    <Pane>
        {todos.map((todo) => (
            <TodoItem
                key={todo.id}
                value={todo.description}
                completed={todo.completed}
                isInProgress={todo.inProgress}
                onClickedSetInProgress={() => onClickedSetInProgress(todo.id)}
                onClickedToggle={() => onClickedToggle(todo.id)}
                onClickedDelete={() => onClickedDelete(todo.id)}
                onClickedMove={() => onClickedMove(todo.id)}
            />
        ))}
    </Pane>
)

export default TodoList;
