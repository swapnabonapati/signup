// src/components/Dashboard.js

import React from 'react';

const Dashboard = () => {
    const user = JSON.parse(localStorage.getItem('user'));

    if (!user) {
        return <div>Please log in to view your dashboard.</div>;
    }

    return (
        <div>
            <h2>Dashboard</h2>
            <p>Welcome, {user.user_firstname} {user.user_lastname}!</p>
            <p>Email: {user.user_email}</p>
            <p>Phone: {user.user_phone}</p>
            <p>City: {user.user_city}</p>
            <p>Zipcode: {user.user_zipcode}</p>
        </div>
    );
};

export default Dashboard;
