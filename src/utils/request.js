import axios from 'axios';

const request = axios.create({
    baseURL: 'https://tiktok.fullstack.edu.vn/api/',
});

export const get = async (path, opption = {}) => {
    const response = await request.get(path, opption);
    return response.data;
};

export default request;
