import React from 'react';
import { useParams } from 'react-router';

const SingleMeal = () => {

    let params = useParams();

    return (
        <div>
            <h2>Meal Details : {params.details} </h2>
        </div>
    );
};

export default SingleMeal;