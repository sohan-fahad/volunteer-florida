import React  from 'react';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Volunteer.css'

const Volunteer = ({ volunteer }) => {
    const { eventImg, name } = volunteer;

    // genertare random color
    const colors = ["#FFBD3E", "#FF7044", "#3F90FC", "#421FCF"]
    const indexNum = Math.floor(Math.random() * colors.length)
    const color = colors[indexNum]

    // style
    const volunteer_title = {
        backgroundColor: `${color}`,
        color: '#ffff',
        borderRadius: "0 0 10px 10px",
        height: "70px",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        letterSpacing: "1px",
        position: "absolute",
        top: "235px"
    }
    return (
        <div className="volunteer">
            <div className="volunteer-img">
                <img src={eventImg} alt="image" className="img-fluid" />
            </div>
            <Nav.Link style={volunteer_title}  as={Link} to="/form">
                <p className="fs-5 mt-2">{name}</p>
            </Nav.Link>
        </div>

    );
};

export default Volunteer;