import React from 'react';
import TodoList from './../todo-list';
import TodoInput from './../todo-input';

const TodoManager = () => (
    <div>
        <div className="mvm df fxdc">
            <TodoInput />
        </div>

        <TodoList />
    </div>
);

export default TodoManager;