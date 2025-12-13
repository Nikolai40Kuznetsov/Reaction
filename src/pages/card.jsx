import { useParams } from 'react-router-dom';
import { movies } from '../storage/movie_data';
import StarRating from '../components/StarRating';
import ToggleButton from '@mui/material/ToggleButton';
import CheckIcon from '@mui/icons-material/Check';
import { useState } from 'react';
import { users } from '../storage/profile_data'

function Card(){
    const param = useParams();
    const [selected, setSelected] = useState(false);

    return(
        <>
            {movies.map((item) => {
                if(item.title === param.title){
                    return(
                        <div>
                            <h2>{item.title}</h2>
                            <p>Год выпуска: {item.year}</p>
                            <p>Жанр: {item.genre}</p>
                            <p>Режисёр: {item.director}</p>
                            <ToggleButton
                                value="check"
                                selected={selected}
                                onChange={() => {
                                    setSelected((prevSelected) => !prevSelected)
                                }}
                                onClick={() => {
                                    if(selected){
                                        users.map((user) => {
                                            user.favorite.map((element, index) => {
                                              if(element === item){
                                                user.favorite.splice(index, 1)
                                              }
                                            })
                                        })
                                    }else{
                                        users.map((user) => {
                                            user.favorite.push(item);
                                        })
                                    }
                                    console.log(users)
                                }}
                            >
                            <CheckIcon />
                            </ToggleButton>
                            <img src={item.img}/>
                            <StarRating title={item.title}></StarRating>
                        </div>
                    )
                }
            })}
        </>
    )
}

export default Card