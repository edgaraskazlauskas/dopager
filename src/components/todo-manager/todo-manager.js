import React from 'react';
import Header from './../header';
import MultipleDayManager from './multiple-day-manager-container';

const TodoManager = ({ type }) => (
    <div className="fxg1">
        <Header />

        <div className="w100p fxg1 df fxdc">
            <MultipleDayManager />
        </div>
    </div>
);

export default TodoManager;