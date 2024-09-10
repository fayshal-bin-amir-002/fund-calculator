import axios from "axios"

export const getTransactions = async ({ date, org_email }) => {
    const { data } = await axios.get(`http://localhost:3000/transactions?date=${date}&org_email=${org_email}`);
    return data;
}

export const addTransactions = async ({ date, org_email, trans, email }) => {
    const { data } = await axios.post(`http://localhost:3000/add-transactions?date=${date}&org_email=${org_email}&email=${email}`, trans);
    return data;
}

export const editTransactions = async ({ date, org_email, trans, email }) => {
    const { data } = await axios.patch(`http://localhost:3000/edit-transactions?date=${date}&org_email=${org_email}&email=${email}`, trans);
    return data;
}