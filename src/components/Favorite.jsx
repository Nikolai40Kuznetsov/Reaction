import Avatar from '@mui/material/Avatar'
import { users } from '../storage/profile_data'

function Favorite(){
    return(
        <div className='favoriteContainer'>
            {
                users.map(user => {
                    return (user.favorite.map((item) => {
                    return(
                        <div>
                            <Avatar src={item.img}/>
                            <p>{item.title}</p>
                        </div>
                    )
                    })
                )})
            }
        </div>
    )
}
export default Favorite;