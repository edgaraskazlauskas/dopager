import React from 'react';
import CategoryInput from '../todo-input/category-input';
import CategoryCard from '../category-card';

const CategoryList = ({ categoryNames }) => (
    <div>
        <div className="mbm df fxdc">
            <CategoryInput />
        </div>
        <div className="df fxdr fxww phm">
            {categoryNames.map((name) => (
                <CategoryCard key={name} categoryId={name} />
            ))}
            <div>{process.env.REACT_APP_SECRET_CODE}</div>
        </div>
    </div>
);

export default CategoryList;
