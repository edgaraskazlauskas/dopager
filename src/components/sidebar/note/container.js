import { connect } from 'react-redux';
import SidebarNote from './component';

export default connect(
    (state, { id }) => {
        return {
            text: state.notes.notes.byId[id].description
        };
    }
)(SidebarNote);
