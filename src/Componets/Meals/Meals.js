import React from 'react';
import './Meals.css'

const Meals = (props) => {
    let {idMeal, strArea, strCategory, strMeal, strMealThumb} = props.index ;
    return (
        <div>
            <h2>Name : {strMeal}</h2>
        </div>
    );
};

export default Meals;