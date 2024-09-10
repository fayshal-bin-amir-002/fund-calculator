import { useDispatch, useSelector } from "react-redux";
import Transition from "./Transition";
import { useContext, useEffect } from "react";
import { fetchTransactions } from "../Features/transaction/transactionSlice";
import { AuthContext } from "../AuthProvider/AuthProvider";
import Loader from "./Loader";

const Transitions = () => {

    const { org: org_email, date } = useContext(AuthContext);

    const dispatch = useDispatch();

    const { transactions, isLoading } = useSelector((state) => state.transaction);

    useEffect(() => {
        setTimeout(() => {
            dispatch(fetchTransactions({ date, org_email }))
        }, 500);
    }, [dispatch, date, org_email]);

    return (
        <div className="p-4 md:p-6">
            <h4 className="text-center text-xl font-medium border-b pb-1 mb-3">Transactions</h4>

            {
                isLoading ? <Loader></Loader> :
                    <div className="space-y-2">
                        {
                            transactions && transactions.map((t, i) => <Transition data={t} i={i} key={t._id}></Transition>)
                        }
                    </div>
            }

        </div>
    );
};

export default Transitions;