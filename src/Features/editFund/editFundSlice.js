import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isEdit: false,
    fund: {}
}

const editFundSlice = createSlice({
    name: "editFund",
    initialState,
    reducers: {
        editActive: (state, action) => {
            state.isEdit = true
            state.fund = action.payload
        },
        editInActive: (state) => {
            state.isEdit = false
            state.fund = {}
        }
    }
})

export const { editActive, editInActive } = editFundSlice.actions;
export default editFundSlice.reducer;