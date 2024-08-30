import axios from "axios"

export const urlBase = "http://127.0.0.1:3000"

export function Api(){

    const api = axios.create({
        baseURL: urlBase
    });

    return api;
}
