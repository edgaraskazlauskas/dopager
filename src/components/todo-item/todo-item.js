import React from 'react';
import TodoCheckbox from './todo-checkbox';
import TodoDelete from './todo-delete';

const TodoItem = ({ value, completed, onClickedToggle, onClickedDelete }) => (
    <div className="fz16 bdw0 bdbws bdc-gray-light pvs phm bdss df fxdr jcsb">
        <TodoCheckbox checked={completed} onChange={onClickedToggle} onClickedDelete={onClickedDelete}>
            <span className={completed ? 'tdlt' : ''}>{value}</span>
        </TodoCheckbox>
        <TodoDelete onClick={onClickedDelete} />
    </div>
)

export default TodoItem;
