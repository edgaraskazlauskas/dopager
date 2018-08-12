import React from 'react';
import TodoList from './../todo-list';
import TodoInput from './../todo-input';
import DayHeaderContainer from '../todo-list/day-header-container';
import { Type } from '../todo-list/day-header';

const MultipleDayListItem = ({ date, isDateVisible, daysFromNow, categoryId }) => (
    <div className="df fxdc">
        {isDateVisible && (
            <DayHeaderContainer
                type={Type.Large}
                daysFromNow={daysFromNow}
                label={'View Single'}
            />
        )}
        <TodoList date={date} categoryId={categoryId} limit={5} />
        <TodoInput date={date} />
    </div>
);

export default MultipleDayListItem;