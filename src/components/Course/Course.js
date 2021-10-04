import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const Course = (props) => {
    const { name, picture, fee, duration } = props.course;
    return (
        <div className="col-6 g-5">
            <Card className="mx-auto" style={{ width: '27rem' }}>
                <Card.Img variant="top" src={picture} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        This is {duration} months DUET prepararion course for those people who are completed 7th semester of Diploma in Engineering. Our Course fee Only <span className="text-danger">{fee}</span>
                    </Card.Text>
                    <Button variant="dark">
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