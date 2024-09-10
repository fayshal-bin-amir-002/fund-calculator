import axios from "axios"

export const getTransactions = async ({ date, org_email }) => {
    const { data } = await axios.get(`http://localhost:3000/transactions?date=${date}&org_email=${org_email}`);
    return data;
}