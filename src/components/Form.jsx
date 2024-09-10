import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";

const Form = () => {

    const { user } = useContext(AuthContext);

    const handleFundForm = (e) => {
        e.preventDefault();
        console.log('hi');
        
    }

    return (
        <div className="p-4 md:p-6 py-4 md:py-6">
            <form className="space-y-4" onSubmit={handleFundForm}>
                <div className="flex justify-between items-center">
                    <label htmlFor="text" className="text-xl font-medium">Text : </label>
                    <input type="text" name="text" id="text" className="border border-sky-400 p-2 rounded-lg w-2/3" placeholder="Type your text here..." />
                </div>
                <div className="flex justify-between items-center">
                    <label htmlFor="amount" className="text-xl font-medium">Amount : </label>
                    <input type="number" name="amount" id="amount" className="border border-sky-400 p-2 rounded-lg w-2/3" placeholder="Enter your amount here..." />
                </div>
                <div className="flex justify-between items-center pb-5">
                    <label className="text-xl font-medium">Type : </label>
                    <div className="flex w-2/3 justify-start items-center gap-12">
                        <div>
                            <input type="radio" name="type" id="type1" value="income" className="mr-2" />
                            <label htmlFor="type1">Income</label>
                        </div>
                        <div>
                            <input type="radio" name="type" id="type2" value="expense" className="mr-2" />
                            <label htmlFor="type2">Expense</label>
                        </div>
                    </div>
                </div>
                {
                    user?.role === "admin" && <div className="flex justify-between items-center gap-6">
                        <input className="w-full p-3 bg-red-200 text-lg font-medium rounded-lg hover:scale-105 duration-500 text-center cursor-pointer focus:outline-none focus:border-0 focus:ring-0 hover:bg-red-400" readOnly defaultValue={'Reset'} />
                        <button type="submit" className="w-full p-3 bg-sky-200 text-lg font-medium rounded-lg hover:scale-105 duration-500 hover:bg-sky-400">Add Fund</button>
                    </div>
                }
            </form>
        </div>
    );
};

export default Form;