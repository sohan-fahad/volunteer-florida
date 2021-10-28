import React, { useRef, useState } from 'react';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../hook/useAuth';
import './AdminLog.css'

const AdminLog = () => {

    const history = useHistory()
    const location = useLocation()
    const redirect_from = location.state?.from || "/home"
    // console.log(redirect_from)

    const { adminInfo, setIsLoading } = useAuth()

    const [error, setError] = useState("")

    const userNameRef = useRef()
    const passwordRef = useRef()


    const hadleAdminLogin = (e) => {
        setIsLoading(true)
        const name = userNameRef.current.value
        const password = passwordRef.current.value
        e.preventDefault()
        if (name === adminInfo.name && password == adminInfo.password) {
            history.push(redirect_from)
            setError('')
            console.log(name)
            alert("You are successfuly login")
            setIsLoading(false)
        }
        else {
            setError("incorrct user name or password")
        }
    }
    return (
        <div className="admin-login">
            <div className="admin-form">
                <form onSubmit={hadleAdminLogin}>
                    <input type="text" name="" placeholder="Admin User Name" id="" ref={userNameRef} required />
                    <input type="password" name="" placeholder="Admin Password" id="" ref={passwordRef} required />
                    <input type="submit" value="Login" onClick={() => setError('')} />
                </form>
                <p>{error}</p>
            </div>
        </div>
    );
};

export default AdminLog;