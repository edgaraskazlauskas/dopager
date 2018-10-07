import React from 'react';
import { Card, Pane, Heading, Menu } from 'evergreen-ui';
import { UnorderedList, ListItem } from 'evergreen-ui/commonjs/typography';

const CategoryCard = ({ title, items, onClick }) => (
    <Pane display="flex" flexDirection="column" elevation={1} flexGrow={1} margin={16}>
        <Pane flexShrink={0} onClick={onClick}>
            <Pane padding={16}>
                <Heading size={600}>{title}</Heading>
            </Pane>
        </Pane>
        <Menu.Divider />
        <Pane flex="1" overflowY="scroll" padding={16} border="none">
            <Card
                display="flex"
                paddingLeft={8}
                paddingRight={8}
            >
                <UnorderedList>
                    {items.map(({ id, complete, description, onClick }) => (
                        <ListItem icon={complete ? 'tick-circle' : 'circle'} key={id}>{description}</ListItem>
                    ))}
                </UnorderedList>
            </Card>
        </Pane>
    </Pane>
);

export default CategoryCard;
