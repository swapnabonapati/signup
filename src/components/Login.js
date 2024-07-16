// src/components/Login.js

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [formData, setFormData] = useState({
        user_email: '',
        user_password: ''
    });
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const response = await fetch('https://syoft.dev/Api/userlogin/api/userlogin', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        });

        if (response.ok) {
            const data = await response.json();
            localStorage.setItem('user', JSON.stringify(data));
            navigate('/dashboard');
        } else {
            alert('Login failed.');
        }
    };

    return (
        <div>
            <h2>Log In</h2>
            <form onSubmit={handleSubmit}>
                <input type="email" name="user_email" placeholder="Email" onChange={handleChange} required />
                <input type="password" name="user_password" placeholder="Password" onChange={handleChange} required />
                <button type="submit">Log In</button>
            </form>
        </div>
    );
};

export default Login;
