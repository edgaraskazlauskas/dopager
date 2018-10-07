import React from 'react';
import TodoList from './../todo-list';
import TodoInput from './../todo-input';
import DayHeaderContainer from '../todo-list/day-header-container';
import { Type } from '../todo-list/day-header';
import { Pane, Menu } from 'evergreen-ui';

const MultipleDayListItem = ({ date, isDateVisible, daysFromNow, categoryId }) => (
    <Pane display="flex" flexDirection="column">
        {isDateVisible && (
            <DayHeaderContainer
                type={Type.Large}
                daysFromNow={daysFromNow}
                label={'View Single'}
            />
        )}
        <TodoList date={date} categoryId={categoryId} limit={5} />
        <Menu.Divider />
        <Pane paddingLeft={16} paddingTop={16} paddingRight={16} paddingBottom={16}>
            <TodoInput date={date} />
        </Pane>
    </Pane>
);

export default MultipleDayListItem;