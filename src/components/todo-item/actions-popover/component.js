import React from 'react';
import { Button, Menu, Popover, Position } from 'evergreen-ui';

const TodoItemActionsPopover = ({ onClickedDelete, onClickedMove, onClickedSetInProgress }) => (
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
);

export default TodoItemActionsPopover;
