import React from 'react';
import Swipable from '../swipable';

const Header = ({ selectedDate }) => (
    <div className="df fxdc tac fxsh0 pvm phm fz32">
        <Swipable>
            {selectedDate}
        </Swipable>
    </div>
)

export default Header;
