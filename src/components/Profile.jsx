import React, { useEffect, useState } from 'react';
import { getProfile } from '../api';

const Profile = () => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const fetchProfile = async () => {
            try {
                const res = await getProfile();
                setUser(res.data);
            } catch (err) {
                console.error(err);
            }
        };
        fetchProfile();
    }, []);

    if (!user) return <div>Loading...</div>;

    return (
        <div>
            <h1>{user.name}'s Profile</h1>
            <p>Email: {user.email}</p>
            <p>Bincoins: {user.bincoins}</p>
        </div>
    );
};

export default Profile;
