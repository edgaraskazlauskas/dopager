import { connect } from 'react-redux';
import NavigationPaneLink from './navigation-pane-link';
import { togglePagerType, getIsDailyView } from '../../features/pager';
import { isTodosPageOpen } from '../../features/todos/selectors';
import showable from '../../hofs/showable';

const ToggleTodosViewButton = connect(
    (state) => ({
        label: getIsDailyView(state) ? 'Toggle Weekly View' : 'Toggle Daily View',
        isVisible: isTodosPageOpen(state)
    }),
    {
        onClick: togglePagerType
    }
)(showable(NavigationPaneLink));

export default ToggleTodosViewButton;
