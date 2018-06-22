import React from 'react';
import Content from './content';
import Sidenav from './sidenav';

const App = () => (
    <div className="mih100p df fxdr">
        <Sidenav />
        <div className="fxg1">
            <div className="bg-primary phm pvm c-white fz32 tac">
                <span>A dull pencil is better than the sharpest mind</span>
            </div>
            <Content />
        </div>
    </div>
)

export default App;
