import React from 'react';
import { useNavigate } from 'react-router';
import './Meals.css'

const Meals = (props) => {
    let {idMeal, strArea, strCategory, strMeal, strMealThumb} = props.index ;

    let navigate = useNavigate();
    function singleFood(id){
        let url = `/food/${id}`;
        navigate(url);
    }
    return (
        <div onClick={()=>singleFood(idMeal)} className="meal-card h-100">
            <img src={strMealThumb} alt=""/>
            <h3>Name : {strMeal}</h3>
            <a href={"/food/"+idMeal}>Show Details</a>
        </div>
    );
};

export default Meals;