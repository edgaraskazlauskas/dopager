import { connect } from 'react-redux';
import { toggleTogo } from '../../features/todos/actions';
import { getTodoById } from '../../features/todos/selectors';
import TodoItem from './todo-item';
import { openTodoNotes } from '../../features/notes/actions';

export default connect(
    (state, { id }) => {
        const { description, completed, inProgress } = getTodoById(state, id);

        return {
            id,
            value: description,
            completed,
            isInProgress: inProgress
        };
    },
    (dispatch, { id }) => ({
        onClick: () => dispatch(openTodoNotes(id)),
        onClickedToggle: () => dispatch(toggleTogo(id))
    })
)(TodoItem);