import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../hook/useAuth';
import './Manu.css'

const Manu = () => {
    const logo = "https://www.volunteerflorida.org/wp-content/themes/VolunteerFlorida/downloads/png/VF_Logo_2013-4C.png"

    const { handleAdminLoginInfo, user, setUser } = useAuth()
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" variant="dark" sticky="top" className="navBar">
                <Container>
                    <div className="navgate">
                        <Navbar.Brand to="/">
                            <img src={logo} alt="Patient Health Care" className="logo" />
                        </Navbar.Brand>
                        <div>
                            <Navbar.Collapse>
                                <Nav.Link as={Link} to="/home">Home</Nav.Link>
                                <Nav.Link to="/home">Donation</Nav.Link>
                                <Nav.Link to="/home">Events</Nav.Link>
                                <Nav.Link to="/home">Blogs</Nav.Link>
                                {
                                    user.displayName ?
                                        <Nav.Link as={Link} to="/login">
                                            <button className="btn-reg" onClick={() => setUser({})}>Log Out</button>
                                        </Nav.Link> :
                                        <Nav.Link as={Link} to="/login">
                                            <button className="btn-reg">REGISTRATION
                                            </button>
                                        </Nav.Link>
                                }
                                <Nav.Link as={Link} to="/admin" onClick={handleAdminLoginInfo}>
                                    <button className="btn-admin">
                                        ADMIN
                                    </button>
                                </Nav.Link>
                                <p>{user.displayName}</p>
                            </Navbar.Collapse>
                        </div>
                    </div>
                </Container>
            </Navbar>
        </div>
    );
};

export default Manu;