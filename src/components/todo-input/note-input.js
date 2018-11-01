import { connect } from 'react-redux';
import TodoInput from './todo-input';
import { createActiveTodoNote, changeNoteText } from '../../features/notes/actions';

export default connect(
    () => ({
        placeholder: 'Enter note...'
    }),
    (dispatch) => ({
        onChanged: (value) => dispatch(changeNoteText(value)),
        onFinished: (name) => dispatch(createActiveTodoNote(name))
    })
)(TodoInput);
