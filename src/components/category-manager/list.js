import React from 'react';
import CategoryInput from '../todo-input/category-input';
import CategoryCard from '../category-card';
import { Pane } from 'evergreen-ui';

const CategoryList = ({ categoryIds }) => (
    <Pane display="flex" flexGrow={1} flexDirection="column">
        <Pane display="flex" margin={16} justifyContent="center">
            <CategoryInput />
        </Pane>
        <Pane display="flex" flexWrap="wrap" flexDirection="row" justifyContent="space-around">
            {categoryIds.map((id) => (
                <CategoryCard key={id} categoryId={id} />
            ))}
        </Pane>
    </Pane>
);

export default CategoryList;
