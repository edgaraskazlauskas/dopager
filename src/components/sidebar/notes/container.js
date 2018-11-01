import { connect } from 'react-redux';
import SidebarNotes from './component';
import { getActiveTodoId } from '../../../features/todos/selectors';
import { getNoteIds, getNoteById } from '../../../features/notes/selectors';

export default connect(
    (state) => {
        const activeTodoId = getActiveTodoId(state);

        return {
            ids: getNoteIds(state).filter(
                (id) => getNoteById(state, id).todoId === activeTodoId
            )
        };
    }
)(SidebarNotes);
