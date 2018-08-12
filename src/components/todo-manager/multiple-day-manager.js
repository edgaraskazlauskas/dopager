import React from 'react';
import MultipleDayListItem from './multiple-day-list-item-container';

const MultipleDayManager = ({ daysVisible, categoryId }) => (
    Array.from(Array(daysVisible).keys()).map(
        (_, index) => (
            <MultipleDayListItem key={index} daysFromNow={index} categoryId={categoryId} />
        )
    )
);

export default MultipleDayManager;