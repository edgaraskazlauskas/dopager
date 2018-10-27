import React from 'react';
import Header from './../header';
import MultipleDayManager from './multiple-day-manager-container';
import { Pane, Menu } from 'evergreen-ui';
import DueTodosList from './due-todos-list';

const TodoManager = ({ categoryId }) => (
    <Pane flexGrow={1}>
        <Header />

        <DueTodosList categoryId={categoryId} />
        <Menu.Divider />

        <Pane flexGrow={1} display="flex" flexDirection="column">
            <MultipleDayManager categoryId={categoryId} />
        </Pane>
    </Pane>
);

export default TodoManager;