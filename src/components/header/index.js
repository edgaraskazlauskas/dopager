import { connect } from 'react-redux';
import Header from './header';
import { getSelectedDate, getIsDailyView, getFormattedDate } from './../../features/pager';
import showable from './../../hofs/showable';

export default connect(
    (state) => ({
        selectedDate: getFormattedDate(getSelectedDate(state)),
        isVisible: getIsDailyView(state)
    })
)(showable(Header));
