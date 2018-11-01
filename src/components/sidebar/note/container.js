import { connect } from 'react-redux';
import SidebarNote from './component';
import { getNoteById } from '../../../features/notes/selectors';

export default connect(
    (state, { id }) => {
        const note = getNoteById(state, id);

        return {
            text: note ? note.description : null
        };
    }
)(SidebarNote);
