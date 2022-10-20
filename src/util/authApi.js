import axios from "axios";
const token = localStorage.getItem("accessToken");

const apiUrl = axios.create({
    baseURL: "http://localhost:5000/api",
    headers: { Authorization: "Bearer " + token },
});


export const CreateUser = (data) => apiUrl.post("/auth/register", data);
export const LoginUser = (data) => apiUrl.post("/auth/login", data);
export const GetPosts = (query) => apiUrl.get(`/posts${query}`);
export const GetSinglePosts = (id) => apiUrl.get(`/posts/${id}`);
export const DeletePosts = (id) => apiUrl.delete(`/posts/${id}`);
export const UpdateImages = (data) => apiUrl.post(`/files/image`, data)
