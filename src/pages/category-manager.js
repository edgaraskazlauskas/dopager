import React from 'react';
import CategoryInput from '../todo-input/category-input';

const CategoryList = ({ categoryNames }) => (
    <div>
        <CategoryInput />
        {categoryNames.map((name) => (
            <div key={name}>{name}</div>
        ))}
    </div>
);

export default CategoryList;
