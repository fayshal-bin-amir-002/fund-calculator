import axios from 'axios';
import PropTypes from 'prop-types';
import { createContext, useEffect, useState } from 'react';
import toast from 'react-hot-toast';

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const userLogin = async (org_email, email) => {
        try {
            setLoading(true);
            const { data } = await axios.post("http://localhost:3000/login", {
                org_email, email
            });
            if(data?.message) return toast.error(data?.message);
            localStorage.setItem("fundCalculator-user", JSON.stringify(data));
            setUser(JSON.parse(localStorage.getItem("fundCalculator-user")));
            setLoading(false);
        } catch (error) {
            setLoading(false);
            toast.error(error?.message);
        }
    }

    useEffect(() => {
        setLoading(true);
        const fuser = localStorage.getItem("fundCalculator-user");
        if (fuser) {
            setUser(JSON.parse(fuser));
            setLoading(false);
        } else {
            setUser(null);
            setLoading(false);
        }
    }, [])

    const authData = { user, loading, userLogin }

    return (
        <AuthContext.Provider value={authData}>
            {children}
        </AuthContext.Provider>
    );
};

AuthProvider.propTypes = {
    children: PropTypes.node
};

export default AuthProvider;