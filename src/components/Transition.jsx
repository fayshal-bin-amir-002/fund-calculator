import PropTypes from 'prop-types';
import { useContext } from 'react';
import { FaRegEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { AuthContext } from '../AuthProvider/AuthProvider';
import { useDispatch } from 'react-redux';
import { editActive } from '../Features/editFund/editFundSlice';

const Transition = ({ data }) => {

    const { user } = useContext(AuthContext);

    const dispatch = useDispatch();

    return (
        <div className={`${data?.type === 'income' && 'bg-green-100'} ${data?.type === 'expense' && 'bg-red-100'}  px-2 py-1 text-gray-600 rounded-lg shadow-md text-sm flex justify-between items-center gap-4`}>
            <p>{data?.text}</p>
            <div className="flex justify-between items-center gap-4">
                <p className='font-semibold'>{data?.amount}$</p>
                {
                    user?.role === 'admin' && <div className="flex justify-between items-center gap-2 text-2xl">
                        <button onClick={() => dispatch(editActive(data))} className="text-green-600"><FaRegEdit /></button>
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