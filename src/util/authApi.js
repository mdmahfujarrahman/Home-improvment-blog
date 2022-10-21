import axios from "axios";

const apiUrl = axios.create({
    baseURL: "http://localhost:5001/api",
    headers: { Authorization: "Bearer " + localStorage.getItem("accessToken") },
});



export const CreateUser = (data) => apiUrl.post("/auth/register", data);
export const LoginUser = (data) => apiUrl.post("/auth/login", data);

export const GetPosts = (query) => apiUrl.get(`/posts${query}`);
export const WritePosts = (data) =>  apiUrl.post(`/posts`, data);

export const UpdatePosts = (query, data) => apiUrl.patch(`/posts/${query}`, data);
export const GetSinglePosts = (id) => apiUrl.get(`/posts/${id}`);
export const DeletePosts = (id) => apiUrl.delete(`/posts/${id}`);


export const UpdateImages = (data) => apiUrl.post(`/files/image`, data)
