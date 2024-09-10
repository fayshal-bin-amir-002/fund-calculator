import { configureStore } from "@reduxjs/toolkit";
import transactionReducer from "./Features/transaction/transactionSlice";
import editFundReducer from "./Features/editFund/editFundSlice";

const store = configureStore({
    reducer: {
        transaction: transactionReducer,
        edit: editFundReducer
    }
})

export default store;