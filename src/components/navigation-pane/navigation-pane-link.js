import React from 'react';
import { Button } from 'evergreen-ui';

const NavigationPaneLink = ({ label, onClick }) => (
    <Button appearance="minimal" onClick={onClick}>
        {label}
    </Button>
);

export default NavigationPaneLink;