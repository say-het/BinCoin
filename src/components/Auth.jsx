import React, { useState } from 'react';
import { register, login } from '../api';

const Auth = () => {
    const [formData, setFormData] = useState({ name: '', email: '', password: '' });
    const [isLogin, setIsLogin] = useState(true);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = isLogin ? await login(formData) : await register(formData);
            localStorage.setItem('token', res.data.token);
            alert('Success');
        } catch (err) {
            alert('Error');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            {!isLogin && <input type="text" placeholder="Name" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} />}
            <input type="email" placeholder="Email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
            <input type="password" placeholder="Password" value={formData.password} onChange={(e) => setFormData({ ...formData, password: e.target.value })} />
            <button type="submit">{isLogin ? 'Login' : 'Register'}</button>
            <button type="button" onClick={() => setIsLogin(!isLogin)}>{isLogin ? 'Switch to Register' : 'Switch to Login'}</button>
        </form>
    );
};

export default Auth;
