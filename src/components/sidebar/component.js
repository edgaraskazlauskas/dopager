import React from 'react';
import { SideSheet, Heading, Card, Label, Pane, Tablist, Tab } from 'evergreen-ui';
import SidebarNotes from './notes/container';
import NoteInput from './../todo-input/note-input';

const Sidebar = ({ title, isShown, onCloseComplete }) => (
    <SideSheet
        isShown={isShown}
        onCloseComplete={onCloseComplete}
        containerProps={{
            display: 'flex',
            flexDirection: 'column',
        }}
    >
        <Pane zIndex={1} flexShrink={0} elevation={0} backgroundColor="white">
            <Pane padding={16} borderBottom="muted">
                <Heading size={600}>Task: {title}</Heading>
            </Pane>
            <Pane display="flex" padding={8}>
                <Tablist>
                    <Tab isSelected={true}>
                        Notes
                    </Tab>
                </Tablist>
            </Pane>
        </Pane>
        <Pane overflowY="scroll" background="tint1" padding={16} marginBottom={8}>
            <Card
                backgroundColor="white"
                elevation={0}
                marginBottom={16}
                display="flex"
            >
                <Pane padding={16} display="flex" flexDirection="column" flexGrow={1}>
                    <Label
                        htmlFor="textarea-2"
                        marginBottom={16}
                        display="block"
                    >
                        Add a new note
                    </Label>
                    <Pane marginBottom={8}>
                        <NoteInput />
                    </Pane> 
                </Pane>
            </Card>
            <SidebarNotes />
        </Pane>
    </SideSheet>
);

export default Sidebar;
