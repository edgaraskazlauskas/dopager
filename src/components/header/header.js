import React from 'react';

const Header = ({ title, selectedDate }) => (
    <div className="df fxdc w100p tac">
        <div className="bg-primary c-white">
            <h1 className="mtm mhm">{title}</h1>
        </div>
        <h1>{selectedDate}</h1>
    </div>
)

export default Header;
