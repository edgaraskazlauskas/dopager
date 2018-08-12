import { connect } from 'react-redux';
import TodoManager from './todo-manager';
import { getIsDailyView } from './../../features/pager';

export default connect(
    (state, { categoryId }) => ({
        type: state.pager.pagerType,
        isDateVisible: !getIsDailyView(state),
        categoryId
    })
)(TodoManager);
