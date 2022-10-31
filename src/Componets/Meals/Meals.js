import React from 'react';
import './Meals.css'

const Meals = (props) => {
    let {idMeal, strArea, strCategory, strMeal, strMealThumb} = props.index ;
    function singleFood(id){
        console.log(id);
    }
    return (
        <div onClick={()=>singleFood(idMeal)} className="meal-card">
            <img src={strMealThumb} alt=""/>
            <h3>Name : {strMeal}</h3>
        </div>
    );
};

export default Meals;