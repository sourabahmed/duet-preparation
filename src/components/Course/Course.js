import React from 'react';
import { Card , Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const Course = (props) => {
    const { name, picture } = props.course;
    return (
        <div className="col-6 g-5">
            <Card className="mx-auto" style={{ width: '22rem' }}>
                <Card.Img variant="top" src={picture} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                    </Card.Text>
                    <Button variant="danger">
                    <NavLink
                            className="m-3"
                                to="/contact"
                                activeStyle={{
                                    fontWeight: "bold",
                                    color: "white"
                                }}
                            >
                                Contact
                            </NavLink>
                    </Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Course;