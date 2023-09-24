import axios from "axios";

const Api = axios.create({ baseURL: "http://localhost:5000" });

export const login = (authData) => Api.post("/user/login", authData);
export const signup = (authData) => Api.post("/user/signup", authData);
