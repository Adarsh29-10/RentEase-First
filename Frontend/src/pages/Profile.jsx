import React, { useState, useEffect } from 'react';
import Header from '../components/others/Header';
import axios from 'axios';

const Profile = () => {
    const [profile, setProfile] = useState(null);
    const [error, setError] = useState('');

    const profileData = async () => {
        try {
            const response = await axios.post('http://localhost:8080/api/v1/users/get-current-user');
            if (response.data.success) {
                setProfile(response.data); // Assuming the user data is in `response.data.user`
            } else {
                setError(response.data.message || 'Unable to fetch profile');
            }
        } catch (err) {
            setError('An error occurred while fetching profile data');
        }
    };

    useEffect(() => {
        profileData();
    }, []);

    return (
        <>
            <Header />
            <div>
                {error && <p style={{ color: 'red' }}>{error}</p>}
                {profile ? (
                    <div>
                        <h1>Welcome, {profile.name}</h1>
                        <p>Email: {profile.email}</p>
                        {/* Add more fields as needed */}
                    </div>
                ) : (
                    !error && <p>Loading...</p>
                )}
            </div>
        </>
    );
};

export default Profile;