import { useEffect, useState } from 'react';
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged } from "firebase/auth";
import InitialAuthentication from '../Firebase/Firebase.init';

InitialAuthentication()
const useAuthentication = () => {
    const [adminInfo, setAdminInfo] = useState({})
    const [accountInfo, setAccountInfo] = useState({})
    const [user, setUser] = useState({})
    const [error, setError] = useState('')
    const [isLoading, setIsLoading] = useState(true)

    // Load data by clicking admin button
    const handleAdminLoginInfo = () => {

        fetch("http://localhost:5000/adminlog")
            .then(res => res.json())
            .then(data => setAdminInfo(data))
    }

    const auth = getAuth()

    // google singing
    const singingUsingGoole = () => {
        const googleProvider = new GoogleAuthProvider()
        return signInWithPopup(auth, googleProvider)
    }

    // observ user state
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user)
            }
            else {
                setUser({})
            }
            setIsLoading(false)
        })
        return () => unsubscribe;
    }, [])

    return {
        adminInfo,
        setAdminInfo,
        error,
        setError,
        isLoading,
        setIsLoading,
        setAccountInfo,
        accountInfo,
        handleAdminLoginInfo,
        singingUsingGoole,
        user,
        setUser,

    }
};

export default useAuthentication;