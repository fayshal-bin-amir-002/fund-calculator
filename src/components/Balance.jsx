import { useContext, useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import { MdAttachMoney } from "react-icons/md";
import "react-datepicker/dist/react-datepicker.css";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { useSelector } from "react-redux";

const Balance = () => {

    const { transactions } = useSelector((state) => state.transaction);

    const { setDate } = useContext(AuthContext);

    const [startDate, setStartDate] = useState(new Date());
    const [amount, setAmount] = useState(0);

    useEffect(() => {
        let month = startDate.getMonth() + 1;
        let year = startDate.getFullYear();
        let date = `${month}/${year}`;
        setDate(date);
    }, [startDate, setDate]);



    useEffect(() => {
        let total = 0;
        transactions.forEach(t => {
            if (t.type === 'income') total += t.amount;
            if (t.type === 'expense') total -= t.amount;
        });
        setAmount(total);
    }, [startDate, transactions]);

    return (
        <div className="bg-sky-200 p-4 md:p-6">

            <div className="flex justify-between items-center">
                <div>
                    <small className="text-gray-700 font-medium">Fund Main Balance:</small>
                    <h3 className="text-2xl md:text-3xl flex items-center"><MdAttachMoney className="inline" /> {amount}</h3>
                </div>
                <div className="flex flex-col">
                    <small>Select Month/Year</small>
                    <DatePicker
                        selected={startDate}
                        onChange={(date) => setStartDate(date)}
                        showMonthYearPicker
                        dateFormat="MM/yyyy"
                        className="p-1 mt-1 rounded-lg border border-sky-400"
                    />
                </div>
            </div>
        </div>
    );
};

export default Balance;