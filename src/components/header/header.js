import React from 'react';
import Swipable from '../swipable';
import DayHeaderContainer from '../todo-list/day-header-container';

const Header = ({ daysFromNow }) => (
    <div className="df fxdc tac fxsh0 pvm phm fzl">
        <Swipable>
            <DayHeaderContainer daysFromNow={daysFromNow} label={'Toggle Weekly View'} />
        </Swipable>
    </div>
)

export default Header;