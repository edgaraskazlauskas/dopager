import { connect } from 'react-redux';
import { toggleTogo, deleteTodo, moveTodo, toggleTodoInProgress } from '../../../features/todos/actions';
import TodoItemActionsPopover from './component';
import showable from '../../../hofs/showable';

export default connect(
    (state) => ({
        isVisible: state.breakpoint.isExtraSmall || state.breakpoint.isSmall
    }),
    (dispatch, { id }) => ({
        onClickedToggle: () => dispatch(toggleTogo(id)),
        onClickedDelete: () => dispatch(deleteTodo(id)),
        onClickedMove: () => dispatch(moveTodo(id)),
        onClickedSetInProgress: () => dispatch(toggleTodoInProgress(id))
    })
)(showable(TodoItemActionsPopover));