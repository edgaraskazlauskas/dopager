import React from 'react';
import TodoCheckbox from './todo-checkbox';
import { Text, Button, Pane, Menu, Popover, Position } from 'evergreen-ui';

const CrossedText = ({ isCrossed, children, ...rest }) => <Text textDecoration={isCrossed ? 'line-through' : 'none'} {...rest}>{children}</Text>

const TodoItem = ({ value, completed, isInProgress, onClickedToggle, onClickedDelete, onClickedMove, onClickedSetInProgress }) => (
    <Pane padding={16} display="flex" flexDirection="row" justifyContent="space-between" background={isInProgress ? 'yellowTint' : ''}>
        <Pane display="flex" alignItems="center">
            <TodoCheckbox checked={completed} onChange={onClickedToggle} />
            <CrossedText isCrossed={completed} marginLeft={12}>{value}</CrossedText>
        </Pane>
        <Popover
            position={Position.BOTTOM_LEFT}
            content={
                <Menu>
                    <Menu.Group>
                        <Menu.Item icon="play" onSelect={onClickedSetInProgress}>Set in Progress</Menu.Item>
                        <Menu.Item icon="circle-arrow-down" onSelect={onClickedMove}>Move to tomorrow</Menu.Item>
                    </Menu.Group>
                    <Menu.Divider />
                    <Menu.Group>
                        <Menu.Item icon="delete" intent="danger" onSelect={onClickedDelete}>
                            Delete...
                        </Menu.Item>
                    </Menu.Group>
                </Menu>
            }
        >
            <Button appearance="minimal" marginRight={16}>Actions</Button>
        </Popover>
        {/* <Pane display="flex">
            <Button marginRight={12} onClick={onClickedSetInProgress} appearance="minimal" iconBefore="play">In Progress</Button>
            <Button marginRight={12} onClick={onClickedDelete} appearance="minimal" iconBefore="delete">Delete</Button>
            <Button onClick={onClickedMove} appearance="minimal" iconBefore="arrow-down">Tomorrow</Button>
        </Pane> */}
    </Pane>
)

export default TodoItem;
