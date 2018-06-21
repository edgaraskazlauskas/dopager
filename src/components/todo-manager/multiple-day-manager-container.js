import { connect } from 'react-redux';
import MultipleDayManager from './multiple-day-manager';
import { getIsDailyView } from './../../features/pager';

const DAYS_IN_A_WEEK = 7;
const CURRENT_DAY = 1;

export default connect((state) => ({
    startingDate: Date.now(),
    daysVisible: getIsDailyView(state) ? CURRENT_DAY : DAYS_IN_A_WEEK,
    isDateVisible: !getIsDailyView(state)
}))(MultipleDayManager);
