import { connect } from 'react-redux';
import Header from './header';
import { getSelectedDate } from './../../features/pager';

export default connect(
    (state) => ({
        title: 'DoPager',
        selectedDate: getSelectedDate(state)
    })
)(Header);
