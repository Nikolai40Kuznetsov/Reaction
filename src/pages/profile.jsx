import {users} from "../storage/profile_data"
import Avatar from '@mui/material/Avatar';
import Favorite from "../components/Favorite";
import { useState } from "react";

function Profile() {
    const [showFavorite] = useState(true);
    return (
        <div className="profile-page" style={{ padding: '40px', textAlign: 'center' }}>
            {users.map((item) => (
                <div key={item.name} className="profile-header">
                    <Avatar src={item.image} sx={{ width: 120, height: 120, margin: '0 auto' }} />
                    <h1 style={{ fontSize: '2.5rem', margin: '20px 0' }}>{item.name}</h1>
                    <p style={{ color: '#a1a1aa' }}>{item.info}</p>
                    <hr style={{ borderColor: '#27272a', margin: '40px 0' }} />
                    {showFavorite && <Favorite />} 
                </div>
            ))}
        </div>
    );
}

export default Profile