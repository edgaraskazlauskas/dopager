import { connect } from 'react-redux';
import MultipleDayListItem from './multiple-day-list-item';
import { getIsDailyView, getCurrentDayDate, getUpdatedDate, getFormattedDate } from './../../features/pager';

export default connect(
    (state, { daysFromNow, categoryId }) => ({
        date: getFormattedDate(getUpdatedDate(getCurrentDayDate(), daysFromNow)),
        isDateVisible: !getIsDailyView(state),
        categoryId,
        daysFromNow
    })
)(MultipleDayListItem);
