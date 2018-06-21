import React from 'react';
import MultipleDayListItem from './multiple-day-list-item-container';

const MultipleDayManager = ({ daysVisible }) => (
    Array.from(Array(daysVisible).keys()).map(
        (_, index) => (
            <MultipleDayListItem key={index} daysFromNow={index} />
        )
    )
);

export default MultipleDayManager;