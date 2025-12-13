import {users} from "../storage/profile_data"
import Avatar from '@mui/material/Avatar';
import Favorite from "../components/Favorite";
import { useState } from "react";

function Profile(){
    const [showFavorite, setShowFavorite] = useState(true);
    return(
        <div>
            {users.map((item)=>{
                return (
                    <>
                        <Avatar src={item.image}/>
                        <h1>{item.name}</h1>
                        <h3>{item.info}</h3>
                        {
                            setShowFavorite && <Favorite></Favorite>
                        }
                    </>
                )
            })}
        </div>
    )
}

export default Profile