import axios from "axios"

export const getTransactions = async ({ date, org_email }) => {
    const { data } = await axios.get(`https://fund-calculator-server-side.vercel.app/transactions?date=${date}&org_email=${org_email}`);
    return data;
}

export const addTransactions = async ({ date, org_email, trans, email }) => {
    const { data } = await axios.post(`https://fund-calculator-server-side.vercel.app/add-transactions?date=${date}&org_email=${org_email}&email=${email}`, trans);
    return data;
}

export const editTransactions = async ({ date, org_email, trans, email }) => {
    const { data } = await axios.patch(`https://fund-calculator-server-side.vercel.app/edit-transactions?date=${date}&org_email=${org_email}&email=${email}`, trans);
    return data;
}

export const deleteTransactions = async ({ date, org_email, id, email }) => {
    const { data } = await axios.delete(`https://fund-calculator-server-side.vercel.app/delete-transactions/${id}?date=${date}&org_email=${org_email}&email=${email}`);
    return data;
}