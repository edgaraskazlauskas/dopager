import { connect } from 'react-redux';
import DayHeader from './day-header';
import { getCurrentDayDate, getUpdatedDate, goToDayView, getFormattedDate } from './../../features/pager';

export default connect(
    (_state, { daysFromNow }) => ({
        date: getFormattedDate(getUpdatedDate(getCurrentDayDate(), daysFromNow))
    }),
    (dispatch, { daysFromNow }) => ({
        onClickedLabel: () => dispatch(goToDayView(daysFromNow))
    })
)(DayHeader);
