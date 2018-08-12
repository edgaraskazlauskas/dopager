import React from 'react';

const CategoryCard = ({ title, items, onClick }) => (
    <div className="bdss bdc-gray-light bdws phm pvm mvs mhs fxg1 fxsh0 fxb20p" onClick={onClick}>
        <h2>{title}</h2>
        <ul>
            {items.map(({ id, description }) => (
                <li key={id}>{description}</li>
            ))}
        </ul>
    </div>
);

export default CategoryCard;
