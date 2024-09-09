const Form = () => {
    return (
        <div className="p-4 md:p-6 py-4 md:py-6">
            <form className="space-y-4">
                <div className="flex justify-between items-center">
                    <label htmlFor="text" className="text-xl font-medium">Text : </label>
                    <input type="text" name="text" id="text" className="border border-sky-400 p-2 rounded-lg w-2/3" placeholder="Type your text here..." />
                </div>
                <div className="flex justify-between items-center">
                    <label htmlFor="amount" className="text-xl font-medium">Amount : </label>
                    <input type="number" name="amount" id="amount" className="border border-sky-400 p-2 rounded-lg w-2/3" placeholder="Enter your amount here..." />
                </div>
            </form>
        </div>
    );
};

export default Form;