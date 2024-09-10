import PropTypes from 'prop-types';
import { useContext } from 'react';
import { FaRegEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { AuthContext } from '../AuthProvider/AuthProvider';
import { useDispatch } from 'react-redux';
import { editActive } from '../Features/editFund/editFundSlice';
import { deletedTransaction } from '../Features/transaction/transactionSlice';

const Transition = ({ data, i }) => {

    const { user, date, org: org_email } = useContext(AuthContext);

    const dispatch = useDispatch();

    const handleDeleteFund = (id) => {
        dispatch(deletedTransaction({ date, org_email, id, email: user?.email }))
    }

    return (
        <div className={`${data?.type === 'income' && 'bg-green-100'} ${data?.type === 'expense' && 'bg-red-100'}  px-2 py-1 text-gray-600 rounded-lg shadow-md text-sm flex justify-between items-center gap-4`}>
            <p>{i + 1}. {data?.text}</p>
            <div className="flex justify-between items-center gap-4">
                <p className='font-semibold'>{data?.amount}$</p>
                {
                    user?.role === 'admin' && <div className="flex justify-between items-center gap-2 text-2xl">
                        <button onClick={() => dispatch(editActive(data))} className="text-green-600"><FaRegEdit /></button>
                        <button onClick={() => handleDeleteFund(data?._id)} className="text-red-600"><MdDelete /></button>
                    </div>
                }
            </div>
        </div>
    );
};

Transition.propTypes = {
    data: PropTypes.object,
    i: PropTypes.number
};

export default Transition;