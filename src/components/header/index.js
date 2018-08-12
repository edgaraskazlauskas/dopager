import { connect } from 'react-redux';
import Header from './header';
import { getIsDailyView, getSelectedDaysFromNow } from './../../features/pager';
import showable from './../../hofs/showable';

export default connect(
    (state) => ({
        daysFromNow: getSelectedDaysFromNow(state),
        isVisible: getIsDailyView(state)
    })
)(showable(Header));
