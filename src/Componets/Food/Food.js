import React, { useEffect, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import Meals from '../Meals/Meals';
import './Food.css'

const Food = () => {
    let [food, setFood] = useState('');
    function showFood(e){
        let searchText = e.target.value
        setFood(searchText);
    }
    let [meal, setMeal] = useState([]);
    useEffect(()=>{
        let url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${food}`
        fetch(url)
        .then(res=>res.json())
        .then(data=>{
            if(!data.meals){
                console.log('try again');
            }else{
                console.log(data.meals);
                setMeal(data.meals);
            }
        })
        
    },[food])
    return (
        <div>
            <div className="search-div col-lg-6">
                <Form.Control
                    placeholder="Search Your Food here . . . . . . ."
                    aria-label="Recipient's username"
                    aria-describedby="basic-addon2" onChange={showFood}
                />
                <Button variant="warning" className="btn-lg">Search</Button>
            </div>
            <div className="result-div">
            <h2>Total Food Found : {meal.length} </h2>
            <div className="container">
            <div className="row">
            {                   
                            meal.map(index=>
                            <div className="col-lg-4 col-md-6">
                                <Meals
                                    index = {index}
                                    key = {index.idMeal}
                                ></Meals>
                            </div>                            
                            
                            )
            }
                
            </div>
            </div>

                
            </div>
        </div>
    );
};

export default Food;