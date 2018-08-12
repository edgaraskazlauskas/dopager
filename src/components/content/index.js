import React from 'react';
import TodoManager from './../todo-manager';
import PagerNavigator from './../pager';

const Content = ({ categoryId }) => (
    <div className="df fxg1 fxdc">
        <TodoManager categoryId={categoryId} />
        <PagerNavigator />
    </div>
)

export default Content;
