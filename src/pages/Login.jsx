import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { Navigate } from "react-router-dom";

const Login = () => {

    const { user, userLogin } = useContext(AuthContext);

    const handleLogin = async (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const org_email = form.org_email.value;
        await userLogin(org_email, email);
    }

    if (user) return <Navigate to={"/"}></Navigate>

    return (
        <div>
            <form className="max-w-[400px] w-full" onSubmit={handleLogin}>
                <div>
                    <label className="block font-semibold">Your Email</label>
                    <div className="mt-1">
                        <input type="text" name="email" id="email"  className="bg-white shadow-sm ring-0 block w-full text-lg focus:outline-none focus:border-tan-500 border-tan-300 p-2 border-2" />
                    </div>
                </div>
                <div className="mt-6">
                <label className="block font-semibold">Organization Email</label>
                    <div className="mt-1">
                        <input type="text" name="org_email" id="org_email" className="bg-white shadow-sm ring-0 block w-full text-lg focus:outline-none focus:border-tan-500 border-tan-300 p-2 border-2" />
                    </div>
                </div>

                <div>
                    <button className="flex flex-no-wrap mt-6 border-2 border-white text-white bg-sky-500 py-2 px-4" type="submit">
                        <span>Take Me In</span>
                        <span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-2 w-6 h-6"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                        </span>
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Login;