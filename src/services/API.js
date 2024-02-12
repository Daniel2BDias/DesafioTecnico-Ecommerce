import axios from "axios";

const baseURL = "http://localhost:3000";

async function useAPIgetProducts () {
    return await axios.get(`${baseURL}/produtos/`)
};

async function useAPIgetProduct (id) {
    return await axios.get(`${baseURL}/produtos?id=${id}`)
};

export const APIcall = { useAPIgetProducts, useAPIgetProduct };