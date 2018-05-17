import React from 'react';
import TodoCheckbox from './todo-checkbox';
import TodoDelete from './todo-delete';
import TodoMove from './todo-move';

const TodoItem = ({ value, completed, onClickedToggle, onClickedDelete, onClickedMove }) => (
    <div className="fz16 bdw0 bdbws bdc-gray-light pvm pvs-xs phm bdss df fxdr jcsb">
        <TodoCheckbox checked={completed} onChange={onClickedToggle} onClickedDelete={onClickedDelete}>
            <span className={completed ? 'tdlt' : ''}>{value}</span>
        </TodoCheckbox>
        <div className="df">
            <TodoDelete onClick={onClickedDelete} />
            <TodoMove onClick={onClickedMove} />
        </div>
    </div>
)

export default TodoItem;
