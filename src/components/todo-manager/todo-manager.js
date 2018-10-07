import React from 'react';
import Header from './../header';
import MultipleDayManager from './multiple-day-manager-container';
import { Pane } from 'evergreen-ui';

const TodoManager = ({ categoryId }) => (
    <Pane flexGrow={1}>
        <Header />

        <Pane flexGrow={1} display="flex" flexDirection="column">
            <MultipleDayManager categoryId={categoryId} />
        </Pane>
    </Pane>
);

export default TodoManager;