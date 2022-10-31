import React from 'react';
import './Details.css'

const Details = (props) => {
    let {idMeal, strArea, strCategory, strMeal, strMealThumb} = props.index ;
    return (
        <div>
            <h2>Name : {strMeal} </h2>
            <img src={strMealThumb} alt=""/>
        </div>
    );
};

export default Details;