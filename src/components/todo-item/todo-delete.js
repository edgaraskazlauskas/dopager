import React from 'react';
import './delete.css';

const TodoDelete = ({ onClick }) => (
    <div className="todo-delete" onClick={onClick}>-</div>
);

export default TodoDelete;
