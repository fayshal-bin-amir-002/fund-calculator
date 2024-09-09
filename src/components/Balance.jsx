import { MdAttachMoney } from "react-icons/md";

const Balance = () => {
    return (
        <div className="bg-sky-200 p-4 md:p-6">
            <small className="text-gray-700 font-medium">Fund Main Balance:</small>
            <h3 className="text-2xl md:text-3xl flex items-center"><MdAttachMoney className="inline" /> 2000</h3>
        </div>
    );
};

export default Balance;