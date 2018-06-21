import React from 'react';
import Content from './content';
import ViewTypeToggle from './view-type-toggle';

const App = () => (
    <div className="h100p df fxdr">
        <div style={{ flexBasis: 280 }} className="bdss bdw0 bdrws bdc-gray-light">
            <div className="fz16 phm pvm tac bdss bdw0 bdbws bdc-gray-light">Anonymous</div>
        </div>
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
