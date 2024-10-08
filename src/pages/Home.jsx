import { useContext } from "react";
import Balance from "../components/Balance";
import Form from "../components/Form";
import Transitions from "../components/Transitions";
import { AuthContext } from "../AuthProvider/AuthProvider";

const Home = () => {

    const { userLogout, user } = useContext(AuthContext);

    const handleLogOut = async () => {
        await userLogout();
    }

    return (
        <div className="xl:w-1/3 md:w-2/3 bg-gray-50 h-full w-full rounded-lg shadow-lg overflow-y-auto relative">
            <Balance></Balance>
            { user?.role === 'admin' && <Form></Form>}
            <Transitions></Transitions>
            <div className="absolute top-0 right-0 z-50">
                <button onClick={handleLogOut} className="px-1.5 py-1 bg-red-400 rounded-lg text-white font-medium">Logout</button>
            </div>
        </div>
    );
};

export default Home;