import React from 'react';
import TodoManager from './../todo-manager';
import { Pane } from 'evergreen-ui';

const Content = ({ categoryId }) => (
    <Pane display="flex" flexGrow={1} flexDirection="column">
        <TodoManager categoryId={categoryId} />
    </Pane>
)

export default Content;
