import React from 'react';
import TodoList from './../todo-list';
import TodoInput from './../todo-input';

const MultipleDayListItem = ({ date, isDateVisible }) => (
    <div className="df fxdc">
        {isDateVisible && <div className="pvm fz32 tac">{date}</div>}
        <TodoList date={date} />
        <TodoInput date={date} />
    </div>
);

export default MultipleDayListItem;