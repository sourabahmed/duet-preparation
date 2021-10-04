import React, { useEffect, useState } from 'react';
import { Carousel } from 'react-bootstrap';
import Course from '../Course/Course';

const Courses = () => {
    const [courses, setCourses] = useState([]);
    useEffect(() => {
        fetch("./course.json")
            .then(res => res.json())
            .then(data => setCourses(data))
    }, [])
    return (
        <div className="container">
            <h2 className="text-center text-primary m-3">Duet Admission Preparation</h2>
            <div>
                <Carousel fade>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="./download (1).jpeg"
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h3>Electrical</h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="./download (2).jpeg"
                            alt="Second slide"
                        />

                        <Carousel.Caption>
                            <h3>Mechanical</h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="download.jpeg"
                            alt="Third slide"
                        />

                        <Carousel.Caption>
                            <h3>Computer</h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
            <div className="row">
                {
                    courses.map(course => <Course course={course} key={course.id}></Course>)
                }
            </div>
        </div>
    );
};

export default Courses;