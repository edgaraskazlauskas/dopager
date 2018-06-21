import { createAction } from 'redux-action';
import addDays from 'date-fns/add_days';
import startOfDay from 'date-fns/start_of_day';
import format from 'date-fns/format'
import TodoManagerType from './../components/todo-manager/type';

export const getSelectedDate = (state) => state.pager.activeDate;

const SET_DATE = 'pager/SET_DATE';
const SET_PAGER_TYPE = 'pager/SET_PAGER_TYPE';

export const setDateAction = createAction(SET_DATE);
export const setPagerType = createAction(SET_PAGER_TYPE);

const getActiveDate = (state) => state.pager.activeDate;
export const getCurrentDayDate = (state) => startOfDay(Date.now()).getTime();
export const getIsDailyView = (state) => state.pager.pagerType === TodoManagerType.DAILY;
export const getUpdatedDate = (date, daysToAdd) => addDays(date, daysToAdd).getTime();
export const getFormattedDate = (date) => format(date, 'dddd - MM/DD/YYYY')

export const goToPrevious = () => (dispatch, getState) => {
    dispatch(setDateAction({
        activeDate: getUpdatedDate(getActiveDate(getState()), -1)
    }));
}

export const togglePagerType = () => (dispatch, getState) => {
    dispatch(setPagerType({
        pagerType: getIsDailyView(getState()) ? TodoManagerType.WEEKLY : TodoManagerType.DAILY
    }))
}

export const goToNext = () => (dispatch, getState) => {
    dispatch(setDateAction({
        activeDate: getUpdatedDate(getActiveDate(getState()), 1)
    }));
}

const pagerReducer = (state = { activeDate: Date.now(), pagerType: TodoManagerType.DAILY }, action) => {
    switch (action.type) {
        case SET_DATE:
            return {
                ...state,
                activeDate: action.payload.activeDate
            };
        case SET_PAGER_TYPE:
            return {
                ...state,
                pagerType: action.payload.pagerType
            }
        default:
            return state
    }
  }
  
  export default pagerReducer;