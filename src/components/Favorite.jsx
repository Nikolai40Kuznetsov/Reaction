import { useState } from 'react';
import Avatar from '@mui/material/Avatar'
import { clearItem, users } from '../storage/profile_data'
import { NavLink } from 'react-router-dom';

function Favorite(){
    const [list, setList] = useState(users);

    const handleDelete = () => {
        clearItem();
        setList([...users]); 
    }

    return(
        <div className='favorite-section'>
            <button className="delete-btn" onClick={handleDelete}>
                ОЧИСТИТЬ ИЗБРАННОЕ
            </button>
            
            <div className="favorite-grid">
                {list.map(user => (
                    user.favorite.map((item) => (
                        <NavLink to={'/' + item.title} key={item.title} className="fav-item">
                            <Avatar 
                                src={item.img} 
                                variant="rounded" 
                                sx={{ width: 60, height: 90, border: '1px solid #333' }} 
                            />
                            <div className="fav-info">
                                <p>{item.title}</p>
                                <span>{item.genre}</span>
                            </div>
                        </NavLink>
                    ))
                ))}
            </div>
            {users.every(u => u.favorite.length === 0) && (
                <p style={{color: '#666', marginTop: '20px'}}>Ваш список пуст</p>
            )}
        </div>
    )
}
export default Favorite;