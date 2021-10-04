import React from 'react';
import { Card, Button } from 'react-bootstrap';

const Service = (props) => {
    const{picture, name, fee} = props.service;
    return (
        <div className="col-4 ps-5 mb-4">
            <Card style={{ width: '20rem' }}>
                <Card.Img variant="top" src={picture} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content. <br />
                        <span>Course fee: {fee}</span>
                    </Card.Text>
                    <Button variant="primary">Buy Now</Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Service;