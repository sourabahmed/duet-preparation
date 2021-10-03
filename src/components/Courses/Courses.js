import React, { useEffect, useState } from 'react';
import Course from '../Course/Course';

const Courses = () => {
    const [courses, setCourses] = useState([]);
    console.log(courses)
    useEffect(() => {
        fetch("./course.json")
        .then(res => res.json())
        .then(data => setCourses(data))
    },[])
    return (
        <div className="container">
            <div className="row">
                {
                     courses.map(course => <Course course={course} key={course.id}></Course>)
                }
            </div>
        </div>
    );
};

export default Courses;