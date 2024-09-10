import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { addedTransaction, editedTransaction } from "../Features/transaction/transactionSlice";
import { useDispatch, useSelector } from "react-redux";
import { editInActive } from "../Features/editFund/editFundSlice";

const Form = () => {

    const [text, setText] = useState("");
    const [type, setType] = useState("");
    const [amount, setAmount] = useState("");

    const { user, date, org: org_email } = useContext(AuthContext);

    const dispatch = useDispatch();
    const { isEdit, fund } = useSelector((state) => state.edit);

    const handleFundForm = (e) => {
        e.preventDefault();
        const trans = {
            text, type, amount: Number(amount)
        }

        dispatch(addedTransaction({ date, org_email, trans, email: user?.email }));

        handleReset();
    }

    const handleFundFormUpdate = (e) => {
        e.preventDefault();
        const trans = {
            text, type, amount: Number(amount), id: fund?._id
        }

        dispatch(editedTransaction({ date, org_email, trans, email:user?.email }))

        handleReset();
    }

    const handleReset = () => {
        setText("");
        setAmount("");
        setType("");
        dispatch(editInActive());
    }

    useEffect(() => {
        const { _id, text, amount, type } = fund || {};
        if (_id) {
            setText(text);
            setType(type);
            setAmount(amount);
        }
    }, [fund]);

    return (
        <div className="p-4 md:p-6 py-4 md:py-6">
            <form className="space-y-4" onSubmit={isEdit ? handleFundFormUpdate : handleFundForm}>
                <div className="flex justify-between items-center">
                    <label htmlFor="text" className="text-xl font-medium">Text : </label>
                    <input value={text} onChange={(e) => setText(e.target.value)} type="text" name="text" id="text" className="border border-sky-400 p-2 rounded-lg w-2/3" placeholder="Type your text here..." required />
                </div>
                <div className="flex justify-between items-center">
                    <label htmlFor="amount" className="text-xl font-medium">Amount : </label>
                    <input value={amount} onChange={(e) => setAmount(e.target.value)} type="number" name="amount" id="amount" className="border border-sky-400 p-2 rounded-lg w-2/3" placeholder="Enter your amount here..." required />
                </div>
                <div className="flex justify-between items-center pb-5">
                    <label className="text-xl font-medium">Type : </label>
                    <div className="flex w-2/3 justify-start items-center gap-12">
                        <div>
                            <input checked={type === "income"} onChange={() => setType("income")} type="radio" name="type" id="type1" value="income" className="mr-2" required />
                            <label htmlFor="type1">Income</label>
                        </div>
                        <div>
                            <input checked={type === "expense"} onChange={() => setType("expense")} type="radio" name="type" id="type2" value="expense" className="mr-2" />
                            <label htmlFor="type2">Expense</label>
                        </div>
                    </div>
                </div>
                {
                    user?.role === "admin" && <div className="flex justify-between items-center gap-6">
                        <input className="w-full p-3 bg-red-200 text-lg font-medium rounded-lg hover:scale-105 duration-500 text-center cursor-pointer focus:outline-none focus:border-0 focus:ring-0 hover:bg-red-400" onClick={handleReset} readOnly defaultValue={'Reset'} />
                        <button type="submit" className="w-full p-3 bg-sky-200 text-lg font-medium rounded-lg hover:scale-105 duration-500 hover:bg-sky-400">{isEdit ? 'Update' : 'Add'} Fund</button>
                    </div>
                }
            </form>
        </div>
    );
};

export default Form;