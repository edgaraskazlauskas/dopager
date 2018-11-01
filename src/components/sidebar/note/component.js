import * as React from 'react';
import { Card, Pane, Text } from 'evergreen-ui';

const SidebarNote = ({ text }) => (
    <Card
        backgroundColor="white"
        elevation={0}
        marginBottom={8}
        display="flex"
    >
        <Pane padding={16} display="flex" flexDirection="column" flexGrow={1}>
            <Text
                marginBottom={16}
                display="block"
            >
                {text}
            </Text>
        </Pane>
    </Card>
);

export default SidebarNote;
