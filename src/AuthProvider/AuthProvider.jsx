import axios from 'axios';
import PropTypes from 'prop-types';
import { createContext, useEffect, useState } from 'react';
import toast from 'react-hot-toast';

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    const [org, setOrg] = useState(null);
    const [date, setDate] = useState(null);
    const [loading, setLoading] = useState(true);

    const userLogin = async (org_email, email) => {
        try {
            setLoading(true);
            const { data } = await axios.post("https://fund-calculator-server-side.vercel.app/login", {
                org_email, email
            });
            if(data?.message) return toast.error(data?.message);
            localStorage.setItem("fundCalculator-user", JSON.stringify(data));
            setUser(JSON.parse(localStorage.getItem("fundCalculator-user")).user);
            setOrg(JSON.parse(localStorage.getItem("fundCalculator-user")).org_email);
            setLoading(false);
        } catch (error) {
            setLoading(false);
            toast.error(error?.message);
        }
    }

    const userLogout = () => {
        setLoading(true);
        localStorage.removeItem("fundCalculator-user");
        setUser(null);
        setLoading(false);
    }

    useEffect(() => {
        setLoading(true);
        const fuser = localStorage.getItem("fundCalculator-user");
        if (fuser) {
            setUser(JSON.parse(fuser).user);
            setOrg(JSON.parse(fuser).org_email);
            setLoading(false);
        } else {
            setUser(null);
            setLoading(false);
        }
    }, [])

    useEffect(() => {
        const startDate = new Date();
        let month = startDate.getMonth() + 1;
        let year = startDate.getFullYear();
        let date = `${month}/${year}`;
        setDate(date);
    },[]);

    const authData = { user, org, date, setDate, loading, setLoading, userLogin, userLogout }

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