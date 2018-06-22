import React from 'react';
import Icon from 'react-icons-kit';
import { angleDown } from 'react-icons-kit/fa/angleDown';
import './action.css';

const TodoMove = ({ onClick }) => (
    <div className="todo-action bg-green c-white" onClick={onClick}>
        <Icon icon={angleDown} />
    </div>
);

export default TodoMove;
