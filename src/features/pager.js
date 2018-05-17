import { createAction } from 'redux-action';
import addDays from 'date-fns/add_days';

export const getSelectedDate = (state) => state.pager.activeDate;

const SET_DATE = 'pager/SET_DATE';

export const setDateAction = createAction(SET_DATE);

const getActiveDate = (state) => state.pager.activeDate || Date.now();
const getUpdatedDate = (date, daysToAdd) => addDays(date, daysToAdd).toDateString()

export const goToPrevious = () => (dispatch, getState) => {
    dispatch(setDateAction({
        activeDate: getUpdatedDate(getActiveDate(getState()), -1)
    }));
}

export const goToNext = () => (dispatch, getState) => {
    dispatch(setDateAction({
        activeDate: getUpdatedDate(getActiveDate(getState()), 1)
    }));
}

const pagerReducer = (state = { activeDate: Date.now() }, action) => {
    switch (action.type) {
        case SET_DATE:
            return {
                activeDate: action.payload.activeDate
            };
        default:
            return state
    }
  }
  
  export default pagerReducer;