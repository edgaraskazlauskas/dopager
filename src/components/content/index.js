import React from 'react';
import TodoManager from './../todo-manager';
import PagerNavigator from './../pager';

const Content = () => (
    <div className="w100p maw600 fxg1 df fxdc">
        <TodoManager />
        <PagerNavigator />
    </div>
)

export default Content;
