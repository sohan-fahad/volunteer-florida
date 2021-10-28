import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import Volunteer from '../Volunteer/Volunteer';
import './Volunteers.css'

const Volunteers = () => {
    const [volunteers, setVolunteers] = useState([])
    useEffect(() => {
        fetch("http://localhost:5000/volunteers")
        .then(res => res.json()) 
        .then(data => setVolunteers(data))
    }, [])
    return (
        <Container className="volunteers">
            {
                volunteers.map(volunteer => <Volunteer
                key={volunteer._id}
                volunteer={volunteer}
                ></Volunteer>)
            }
        </Container>
    );
};

export default Volunteers;