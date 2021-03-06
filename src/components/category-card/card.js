import React from 'react';
import { Button, Heading, Card, Pane, Menu, Popover, Position } from 'evergreen-ui';
import TodoList from '../todo-list';

const CategoryCard = ({ categoryId, title, onClick, onClickedDelete, todosType }) => (
    <Pane display="flex" flexDirection="column" elevation={1} flexGrow={1} margin={16}>
        <Pane flexShrink={0}>
            <Pane padding={16} display="flex" flexDirection="row" justifyContent="space-between" alignItems="center">
                <Heading size={600}>{title}</Heading>

                <Popover
                    position={Position.BOTTOM_LEFT}
                    content={
                        <Menu>
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
            </Pane>
        </Pane>
        <Menu.Divider />
        <Pane flex="1" overflowY="scroll" padding={16} border="none">
            <Card
                display="flex"
                flexDirection="column"
                paddingLeft={8}
                paddingRight={8}
            >
                <TodoList categoryId={categoryId} todosType={todosType} />
                <Button onClick={onClick} appearance="minimal" justifyContent="center">More...</Button>
            </Card>
        </Pane>
    </Pane>
);

export default CategoryCard;
