import React from 'react';
import Icon from 'react-icons-kit';
import { circleO } from 'react-icons-kit/fa/circleO';
import './action.css';

const TodoSetInProgress = ({ onClick }) => (
    <div className="todo-action bg-yellow-light c-black" onClick={onClick}>
        <Icon icon={circleO} />
    </div>
);

export default TodoSetInProgress;
