import { connect } from 'react-redux';
import NavigationPaneLink from './navigation-pane-link';
import showable from '../../hofs/showable';
import { isTodosPageOpen } from '../../features/todos/selectors';
import { openTodos } from '../../features/todos/actions';

const TodosLink = connect(
    (state) => ({
        label: 'Open Todos Page',
        isVisible: !isTodosPageOpen(state)
    }),
    {
        onClick: openTodos
    }
)(showable(NavigationPaneLink));

export default TodosLink;
