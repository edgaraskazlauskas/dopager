import React from 'react';
import './action.css';

const TodoDelete = ({ onClick }) => (
    <div className="todo-action bg-red" onClick={onClick}>
        -
    </div>
);

export default TodoDelete;
