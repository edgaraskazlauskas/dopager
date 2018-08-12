import React from 'react';
import Header from './../header';
import MultipleDayManager from './multiple-day-manager-container';

const TodoManager = ({ categoryId }) => (
    <div className="fxg1">
        <Header />

        <div className="w100p fxg1 df fxdc">
            <MultipleDayManager categoryId={categoryId} />
        </div>
    </div>
);

export default TodoManager;