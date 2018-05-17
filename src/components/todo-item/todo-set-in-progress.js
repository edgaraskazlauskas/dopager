import React from 'react';
import './action.css';

const TodoSetInProgress = ({ onClick }) => (
    <div className="todo-action bg-yellow-light c-black" onClick={onClick}>
        #
    </div>
);

export default TodoSetInProgress;
