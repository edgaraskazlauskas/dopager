import { connect } from 'react-redux';
import TodoInput from './todo-input';
import { createActiveTodoNote } from '../../features/notes/actions';

export default connect(
    () => ({
        placeholder: 'Enter note...'
    }),
    (dispatch) => ({
        onFinished: (note) => dispatch(createActiveTodoNote(note))
    })
)(TodoInput);
