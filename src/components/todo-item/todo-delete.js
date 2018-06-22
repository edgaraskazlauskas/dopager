import React from 'react';
import Icon from 'react-icons-kit';
import { trashO } from 'react-icons-kit/fa/trashO';
import './action.css';

const TodoDelete = ({ onClick }) => (
    <div className="todo-action bg-red c-white" onClick={onClick}>
        <Icon icon={trashO} />
    </div>
);

export default TodoDelete;
