import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

const MainLayout = () => {
    return (
        <>
            <NavBar></NavBar>
            <div className="my-4 md:my-6 lg:my-8 h-[calc(100vh-115px)] md:h-[calc(100vh-159px)] lg:h-[calc(100vh-203px)] flex justify-center items-center p-3">
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </>
    );
};

export default MainLayout;