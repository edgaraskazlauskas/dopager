import { connect } from 'react-redux';
import TodoManager from './todo-manager';
import { getIsDailyView } from './../../features/pager';

export default connect((state) => ({
    type: state.pager.pagerType,
    isDateVisible: !getIsDailyView(state)
}))(TodoManager);
