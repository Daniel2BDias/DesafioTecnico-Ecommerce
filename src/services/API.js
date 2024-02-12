import axios from "axios";

const baseURL = "http://localhost:3000";

async function useAPIgetProducts () {
    return await axios.get(`${baseURL}/produtos/`)
};

export const APIcall = { useAPIgetProducts };