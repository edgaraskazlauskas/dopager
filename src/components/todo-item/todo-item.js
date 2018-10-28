import React from 'react';
import TodoCheckbox from './todo-checkbox';
import { Text, Pane } from 'evergreen-ui';
import TodoItemActionButtons from './action-buttons/container';
import TodoItemActionsPopover from './actions-popover/container';

const CrossedText = ({ isCrossed, children, ...rest }) => <Text textDecoration={isCrossed ? 'line-through' : 'none'} {...rest}>{children}</Text>

export const TodoItemType = {
    Compact: 'compact',
    Regular: 'regular'
};

const StyleByTypeMap = {
    [TodoItemType.Compact]: {
        wrapperPaddingVertical: 8,
        wrapperPaddingHorizontal: 8
    },
    [TodoItemType.Regular]: {
        wrapperPaddingVertical: 16,
        wrapperPaddingHorizontal: 16
    }
};

const TodoItem = ({ id, type = TodoItemType.Compact, value, completed, isInProgress, onClickedToggle }) => (
    <Pane
        paddingLeft={StyleByTypeMap[type].wrapperPaddingHorizontal}
        paddingRight={StyleByTypeMap[type].wrapperPaddingHorizontal}
        paddingTop={StyleByTypeMap[type].wrapperPaddingVertical}
        paddingBottom={StyleByTypeMap[type].wrapperPaddingVertical}
        display="flex"
        flexDirection="row"
        justifyContent="space-between"
        background={isInProgress ? 'yellowTint' : ''}
    >
        <Pane display="flex" alignItems="center">
            <TodoCheckbox checked={completed} onChange={onClickedToggle} />
            <CrossedText isCrossed={completed} marginLeft={12}>{value}</CrossedText>
        </Pane>
        <TodoItemActionButtons id={id} />
        <TodoItemActionsPopover id={id} />
    </Pane>
);

export default TodoItem;
