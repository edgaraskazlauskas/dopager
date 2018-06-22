import React from 'react';
import Content from './content';
import ViewTypeToggle from './view-type-toggle';
import Sidenav from './layout/sidenav';

const App = () => (
    <div className="mih100p df fxdr">
        <Sidenav />
        <div className="fxg1">
            <div className="bg-primary phm pvm c-white fz32 tac">
                <span>Dopager</span>

                <ViewTypeToggle />
            </div>
            <Content />
        </div>
    </div>
)

export default App;
