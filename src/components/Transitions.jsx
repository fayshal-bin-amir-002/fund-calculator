import { useDispatch } from "react-redux";
import Transition from "./Transition";
import { useContext, useEffect } from "react";
import { fetchTransactions } from "../Features/transaction/transactionSlice";
import { AuthContext } from "../AuthProvider/AuthProvider";

const Transitions = () => {

    const { org:org_email, date } = useContext(AuthContext);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchTransactions({date, org_email}))
    },[dispatch, date, org_email])

    return (
        <div className="p-4 md:p-6">
            <h4 className="text-center text-xl font-medium border-b pb-1 mb-3">Transactions</h4>

            <div className="space-y-2">
                <Transition></Transition>
                <Transition></Transition>
                <Transition></Transition>
                <Transition></Transition>
                <Transition></Transition>
                <Transition></Transition>
                <Transition></Transition>
                <Transition></Transition>
            </div>
        </div>
    );
};

export default Transitions;