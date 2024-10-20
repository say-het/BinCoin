import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:5000/api' });

// Set JWT token in headers
API.interceptors.request.use((req) => {
    const token = localStorage.getItem('token');
    if (token) req.headers['x-auth-token'] = token;
    return req;
});

export const register = (formData) => API.post('/auth/register', formData);
export const login = (formData) => API.post('/auth/login', formData);
export const getProfile = () => API.get('/auth/profile');
