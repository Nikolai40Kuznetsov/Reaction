import { useParams } from 'react-router-dom';
import { movies } from '../storage/movie_data';
import StarRating from '../components/StarRating';
import ToggleButton from '@mui/material/ToggleButton';
import CheckIcon from '@mui/icons-material/Check';
import { useState } from 'react';
import { saveUsers, users } from '../storage/profile_data'

function Card() {
    const param = useParams();
    const [selected, setSelected] = useState(false);

    const movie = movies.find(item => item.title === param.title);

    if (!movie) return <div className="container">Фильм не найден</div>;

    return (
        <div className="movie-detail-container">
            <div className="movie-detail-content">
                <div className="movie-detail-poster">
                    <img src={movie.img} alt={movie.title} />
                </div>

                <div className="movie-detail-info">
                    <h1>{movie.title}</h1>
                    
                    <div className="movie-meta">
                        <p><span>Год выпуска:</span> {movie.year}</p>
                        <p><span>Жанр:</span> {movie.genre}</p>
                        <p><span>Режиссёр:</span> {movie.director}</p>
                    </div>

                    <div className="movie-actions">
                        <StarRating title={movie.title} />
                        
                        <ToggleButton
                            value="check"
                            selected={selected}
                            sx={{
                                color: "#fff",
                                borderColor: "#ff9900",
                                "&.Mui-selected": {
                                    backgroundColor: "#ff9900",
                                    color: "#000",
                                    "&:hover": { backgroundColor: "#e68a00" }
                                }
                            }}
                            onChange={() => setSelected(!selected)}
                            onClick={() => {
                                users.forEach((user) => { 
                                    const exists = user.favorite.some((fav) => fav.title === movie.title); 
                                    if (!exists) { 
                                        user.favorite.push(movie); 
                                    } else {
                                        const index = user.favorite.findIndex(fav => fav.title === movie.title);
                                        user.favorite.splice(index, 1);
                                    }
                                });
                                saveUsers(users);
                            }}
                        >
                            <CheckIcon sx={{ mr: 1 }} /> 
                            {selected ? "В избранном" : "В избранное"}
                        </ToggleButton>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Card;