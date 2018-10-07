import React from 'react';
import { Pane, Button, Text } from 'evergreen-ui';

export const Type = {
    Regular: 'regular',
    Large: 'large'
}

const DayHeader = ({ date, type = Type.Regular, label, onClickedLabel }) => (
    <Pane
        display="flex"
        flexGrow={1}
        alignItems="center"
        justifyContent="center"
        paddingLeft={16}
        paddingRight={16}
        {...type === Type.Large && { background: 'blueTint', padding: 16 }
    }>
        <Text marginRight={4}>{date}</Text>
        <Button appearance="minimal" onClick={onClickedLabel}>
            {label}
        </Button>
    </Pane>
);

export default DayHeader;