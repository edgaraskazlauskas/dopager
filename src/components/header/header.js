import React from 'react';

const Header = ({ title, selectedDate }) => (
    <div className="df fxdc w100p tac fxsh0">
        <div className="bg-primary phm pvm c-white fz32">
            <span>{title}</span>
        </div>
        <span className="pvm phm fz32">{selectedDate}</span>
    </div>
)

export default Header;
