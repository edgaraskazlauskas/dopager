import React from 'react';
import Swipable from '../swipable';

const Header = ({ selectedDate }) => (
    <div className="df fxdc tac fxsh0 pvm phm fzl">
        <Swipable>
            {selectedDate}
        </Swipable>
    </div>
)

export default Header;
