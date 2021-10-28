import firebaseConfig from "./Firebase.config";
import { initializeApp } from "firebase/app";

const InitialAuthentication = () => {
    return (
        initializeApp(firebaseConfig)
    );
};

export default InitialAuthentication;