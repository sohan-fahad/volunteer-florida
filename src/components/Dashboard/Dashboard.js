import React, { useState } from 'react';
import useAuth from '../../hook/useAuth';
import logo from '../../images/VF_Logo_2013-4C.png'
import { Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import VolunteerList from '../VolunteerList/VolunteerList';
import './Dashboard.css';
import AddEvent from '../AddEvent/AddEvent';

const Dashboard = () => {
    const { adminInfo, setAdminInfo } = useAuth()

    const [isCLicked, setIsClicked] = useState(true)

    const handleAddEvent = () => {
        setIsClicked(true)
    }

    const handleVolunteerList = () => {
        setIsClicked(false)
    }
    return (
        <div className="grid-container">
            <div className="item1">
                {
                    isCLicked? <h5>Add new event</h5>: <h5>Volunteer register list</h5>
                }
                <div className="d-flex align-items-center">
                    <Nav.Link as={Link} to="/home">
                        <button className="btn-reg">
                          Home
                        </button><br />
                    </Nav.Link>
                    <Nav.Link as={Link} to="/home">
                        <button className="btn-admin" onClick={() => setAdminInfo({})}>
                            Log Out
                        </button><br />
                    </Nav.Link>
                    <Navbar.Text className="fs-6">{adminInfo.name}</Navbar.Text>
                </div>
            </div>
            <div className="item2">
                <div className="admin-logo">
                    <img src={logo} alt="" className="img-fluid admin-logo" />
                </div>
                <button onClick={handleAddEvent}><i className="fas fa-plus"></i> Add event</button>
                <button onClick={handleVolunteerList}><i className="fas fa-user-friends"></i> Volunteer register list</button>
            </div>


            <div className="item3">
                {
                    <div>
                        {
                            isCLicked ? <AddEvent></AddEvent> : <VolunteerList></VolunteerList>
                        }
                    </div>
                }
            </div>
        </div>
    );
};

export default Dashboard;