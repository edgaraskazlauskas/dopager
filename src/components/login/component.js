import React from 'react';
import { Pane, Text, Button } from 'evergreen-ui';

const Login = ({ onClickedOk, onClickedClose }) => (
    <Pane
        position="fixed"
        display="flex"
        justifyContent="center"
        alignItems="center"
        bottom={0}
        right={0}
        left={0}
        background="blueTint"
        color="white"
        textAlign="center"
        padding={16}
    >
        <Text marginRight={4}>Log in with your Google account.</Text>
        <Button onClick={onClickedOk}>OK</Button>
        <Button onClick={onClickedClose}>Cancel</Button>
    </Pane>
)

export default Login;