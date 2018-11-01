import { connect } from 'react-redux';
import Sidebar from './component';
import { isNoteSidebarOpen } from '../../features/notes/selectors';
import { closeTodoNotes } from '../../features/notes/actions';
import { getTodoById, getActiveTodoId } from '../../features/todos/selectors';

export default connect(
    (state) => {
        const activeTodo = getTodoById(state, getActiveTodoId(state));

        return {
            isShown: isNoteSidebarOpen(state),
            title: activeTodo ? activeTodo.description : null
        };
    },
    {
        onCloseComplete: closeTodoNotes
    }
)(Sidebar);
