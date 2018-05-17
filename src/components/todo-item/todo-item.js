import React from 'react';
import TodoCheckbox from './todo-checkbox';
import TodoDelete from './todo-delete';
import TodoMove from './todo-move';
import TodoSetInProgress from './todo-set-in-progress';

const TodoItem = ({ value, completed, isInProgress, onClickedToggle, onClickedDelete, onClickedMove, onClickedSetInProgress }) => (
    <div className={`fz16 bdw0 bdbws bdc-gray-light pvm pvs-xs phm bdss df fxdr jcsb ${isInProgress ? 'bg-yellow-light' : ''}`}>
        <TodoCheckbox checked={completed} onChange={onClickedToggle} onClickedDelete={onClickedDelete}>
            <span className={completed ? 'tdlt' : ''}>{value}</span>
        </TodoCheckbox>
        <div className="df">
            <TodoSetInProgress onClick={onClickedSetInProgress} />
            <TodoDelete onClick={onClickedDelete} />
            <TodoMove onClick={onClickedMove} />
        </div>
    </div>
)

export default TodoItem;
