import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';

const Services = () => {
    const [services, setServices] = useState([]);
    console.log(services)
    useEffect(() => {
        fetch("./services.json")
        .then(res => res.json())
        .then(data => setServices(data))
    },[])
    return (
        <div>
            <div className="m-5 row">
                {
                    services.map(service => <Service service={service} key={service.id}></Service>)
                }
            </div>
        </div>
    );
};

export default Services;