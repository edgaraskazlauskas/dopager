import React from 'react';
import Swipable from '../swipable';
import DayHeaderContainer from '../todo-list/day-header-container';
import { Pane } from 'evergreen-ui';

const Header = ({ daysFromNow }) => (
    <Pane display="flex" textAlign="center" flexShrink={0} padding={16} fontSize={24}>
        <Swipable>
            <DayHeaderContainer daysFromNow={daysFromNow} label={'Toggle Weekly View'} />
        </Swipable>
    </Pane>
)

export default Header;