import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="py-1 md:py-2 lg:py-3 bg-sky-300 flex justify-center">
            <small className="text-center text-gray-700 font-medium">
                &copy; All rights reserved || 2024 || <Link target="blank" className="font-semibold underline text-black" to={'https://fayshal-portfolio.netlify.app'}>Fayshal</Link>
            </small>
        </footer>
    );
};

export default Footer;