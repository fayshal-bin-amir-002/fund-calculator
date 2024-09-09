import { FaRegEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

const Transition = () => {
    return (
        <div className="bg-green-100 p-1.5 text-gray-600 rounded-lg shadow-md text-sm flex justify-between items-center gap-4">
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
            <div className="flex justify-between items-center gap-4">
                <p>100$</p>
                <div className="flex justify-between items-center gap-2 text-2xl">
                    <button className="text-green-600"><FaRegEdit /></button>
                    <button className="text-red-600"><MdDelete /></button>
                </div>
            </div>
        </div>
    );
};

export default Transition;