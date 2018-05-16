import React from 'react';
import TodoList from './../todo-list';

const currentItems = [
    {
        id: 1,
        description: 'Finish the basic implementation of Dopager'
    },
    {
        id: 2,
        description: 'Deploy Dopager to heroku'
    }
]

const Content = () => (
    <div>
        <TodoList initialTodos={currentItems} />
    </div>
)

export default Content;
