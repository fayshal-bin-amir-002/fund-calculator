import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { getTransactions } from "./transactionApi"

const initialState = {
    transactions: [],
    isLoading: false,
    isError: false,
    error: ""
}

export const fetchTransactions = createAsyncThunk("transaction/fetchTransactions",
    async ({ date, org_email }) => {
        const transactions = await getTransactions({ date, org_email });
        return transactions;
    }
)

const transactionSlice = createSlice({
    name: "transaction",
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(fetchTransactions.pending, (state) => {
                state.error = ''
                state.isError = false;
                state.isLoading = true;
            })
            .addCase(fetchTransactions.fulfilled, (state, action) => {
                state.isLoading = false;
                state.transactions = action.payload
            })
            .addCase(fetchTransactions.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.error = action.error?.message;
                state.transactions = [];
            })
    }
})

export default transactionSlice.reducer;