import { createAction } from 'redux-actions';
import addDays from 'date-fns/add_days';
import startOfDay from 'date-fns/start_of_day';
import format from 'date-fns/format'

const TodoManagerType = {
    WEEKLY: 0,
    DAILY: 1,
    ALL: 2
};

export const getSelectedDate = (state) => state.pager.activeDate;
export const getSelectedDaysFromNow = (state) => state.pager.daysFromNow;

const SET_DATE = 'pager/SET_DATE';
const SET_PAGER_TYPE = 'pager/SET_PAGER_TYPE';

export const setDateAction = createAction(SET_DATE);
export const setPagerType = createAction(SET_PAGER_TYPE);

const getActiveDate = (state) => state.pager.activeDate;
export const getCurrentDayDate = () => startOfDay(Date.now()).getTime();
export const getIsDailyView = (state) => state.pager.pagerType === TodoManagerType.DAILY;
export const getUpdatedDate = (date, daysToAdd = 0) => addDays(date, daysToAdd).getTime();
export const getFormattedDate = (date) => format(date, 'dddd - MM/DD/YYYY')

export const goToPrevious = () => (dispatch, getState) => {
    const state = getState();

    dispatch(setDateAction({
        activeDate: getUpdatedDate(getActiveDate(state), -1),
        daysFromNow: state.pager.daysFromNow - 1
    }));
};

export const goToDayView = (daysFromNow) => (dispatch) => {
    dispatch(setDateAction({
        activeDate: getUpdatedDate(getCurrentDayDate(), daysFromNow),
        daysFromNow
    }));
    dispatch(togglePagerType());
};

export const togglePagerType = () => (dispatch, getState) => {
    dispatch(setPagerType({
        pagerType: getIsDailyView(getState()) ? TodoManagerType.WEEKLY : TodoManagerType.DAILY
    }))
};

export const goToNext = () => (dispatch, getState) => {
    const state = getState();

    dispatch(setDateAction({
        activeDate: getUpdatedDate(getActiveDate(state), 1),
        daysFromNow: state.pager.daysFromNow - 1
    }));
};

const pagerReducer = (
    state = { activeDate: Date.now(), pagerType: TodoManagerType.ALL, daysFromNow: 0 },
    action
) => {
    switch (action.type) {
        case SET_DATE:
            const { activeDate, daysFromNow } = action.payload;

            return {
                ...state,
                activeDate,
                daysFromNow
            };
        case SET_PAGER_TYPE:
            return {
                ...state,
                pagerType: action.payload.pagerType
            }
        default:
            return state
    }
};
  
export default pagerReducer;