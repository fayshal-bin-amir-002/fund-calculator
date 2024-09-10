import PropTypes from 'prop-types';
import { useContext } from 'react';
import { FaRegEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { AuthContext } from '../AuthProvider/AuthProvider';

const Transition = ({ data }) => {

    const { user } = useContext(AuthContext);

    return (
        <div className={`${data?.type === 'income' ? 'bg-green-100' : 'bg-red-100'} p-1.5 text-gray-600 rounded-lg shadow-md text-sm flex justify-between items-center gap-4`}>
            <p>{data?.text}</p>
            <div className="flex justify-between items-center gap-4">
                <p className='font-semibold'>{data?.amount}$</p>
                {
                    user?.role === 'admin' && <div className="flex justify-between items-center gap-2 text-2xl">
                        <button className="text-green-600"><FaRegEdit /></button>
                        <button className="text-red-600"><MdDelete /></button>
                    </div>
                }
            </div>
        </div>
    );
};

Transition.propTypes = {
    data: PropTypes.object
};

export default Transition;