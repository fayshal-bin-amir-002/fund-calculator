import Balance from "../components/Balance";
import Form from "../components/Form";
import Transitions from "../components/Transitions";

const Home = () => {
    return (
        <div className="xl:w-1/3 md:w-2/3 bg-gray-50 min-h-[70vh] w-full rounded-lg shadow-lg overflow-hidden">
            <Balance></Balance>
            <Form></Form>
            <Transitions></Transitions>
        </div>
    );
};

export default Home;