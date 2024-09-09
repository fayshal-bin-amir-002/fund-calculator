import { useState } from "react";
import DatePicker from "react-datepicker";
import { MdAttachMoney } from "react-icons/md";
import "react-datepicker/dist/react-datepicker.css";

const Balance = () => {

    const [startDate, setStartDate] = useState(new Date());

    return (
        <div className="bg-sky-200 p-4 md:p-6">

            <div className="flex justify-between items-center">
                <div>
                    <small className="text-gray-700 font-medium">Fund Main Balance:</small>
                    <h3 className="text-2xl md:text-3xl flex items-center"><MdAttachMoney className="inline" /> 2000</h3>
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