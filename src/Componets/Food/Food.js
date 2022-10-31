import React from 'react';
import { Button, Form } from 'react-bootstrap';
import './Food.css'

const Food = () => {
    return (
        <div>
            <div className="search-div col-lg-6">
                <Form.Control
                    placeholder="Search Your Food here . . . . . . ."
                    aria-label="Recipient's username"
                    aria-describedby="basic-addon2"
                />
                <Button variant="warning">Search</Button>
            </div>
        </div>
    );
};

export default Food;