import { connect } from 'react-redux';
import { toggleTogo, deleteTodo, moveTodo, toggleTodoInProgress } from '../../features/todos/actions';
import { getTodoById } from '../../features/todos/selectors';
import TodoItem from './todo-item';

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
        onClickedToggle: () => dispatch(toggleTogo(id)),
        onClickedDelete: () => dispatch(deleteTodo(id)),
        onClickedMove: () => dispatch(moveTodo(id)),
        onClickedSetInProgress: () => dispatch(toggleTodoInProgress(id))
    })
)(TodoItem);