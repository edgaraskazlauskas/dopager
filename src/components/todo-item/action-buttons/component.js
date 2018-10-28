import React from 'react';
import { Button, Pane } from 'evergreen-ui';

const TodoItemActionButtons = ({ onClickedDelete, onClickedMove, onClickedSetInProgress }) => (
    <Pane display="flex">
        <Button marginRight={12} onClick={onClickedSetInProgress} appearance="minimal" iconBefore="play">In Progress</Button>
        <Button marginRight={12} onClick={onClickedDelete} appearance="minimal" iconBefore="delete">Delete</Button>
        <Button onClick={onClickedMove} appearance="minimal" iconBefore="arrow-down">Tomorrow</Button>
    </Pane>
);

export default TodoItemActionButtons;
