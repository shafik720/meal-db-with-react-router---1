import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Details from '../Details/Details';

const SingleMeal = () => {

    let params = useParams();

    let[meals, setMeals] = useState([]);
    useEffect(()=>{
        let url =`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${params.details}`;
        fetch(url)
        .then(res=>res.json()) 
        .then(data=>setMeals(data.meals));
    },[]);
    
    
    return (
        <div>
            <h2>Meal Details : {params.details} </h2>
            {
                meals.map(index=><Details
                    index={index}
                ></Details>)
            }
        </div>
    );
};

export default SingleMeal;