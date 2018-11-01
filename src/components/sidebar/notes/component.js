import * as React from 'react';
import SidebarNote from '../note/container';

const SidebarNotes = ({ ids }) => (
    ids.map((noteId) => (
        <SidebarNote key={noteId} id={noteId} />
    ))
);

export default SidebarNotes;
