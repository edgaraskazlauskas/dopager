import { connect } from 'react-redux';
import SidebarNotes from './component';
import { getActiveTodoId } from '../../../features/todos/selectors';

export default connect(
    (state) => {
        const activeTodoId = getActiveTodoId(state);

        return {
            ids: state.notes.notes.ids.filter(
                (id) => state.notes.notes.byId[id].todoId === activeTodoId
            )
        };
    }
)(SidebarNotes);
