import { movies } from "../storage/movie_data"
import { NavLink, useParams } from 'react-router-dom'
import StarRating from '../components/StarRating' 

function Main(){
    const { genre } = useParams()
    
    const genres = [...new Set(movies.map(item => item.genre))];

    const filterMovies = genre 
        ? movies.filter(item => item.genre === genre) 
        : movies;

    return(
        <div className="container">
            <div className="genres-bar">
                <NavLink className="genre-link" to="/main">Все</NavLink>
                {genres.map(item => (
                    <NavLink 
                        key={item} 
                        className="genre-link" 
                        to={'/genre/' + item}
                    >
                        {item}
                    </NavLink>
                ))}
            </div>

            <div className="movies-grid">
                {filterMovies.map((item) => (
                    <NavLink key={item.id} className="movie-card" to={'/' + item.title}>
                        <img src={item.img} alt={item.title} />
                        <h2>{item.title}</h2>
                        <StarRating title={item.title} />
                    </NavLink>
                ))}
            </div>
        </div>          
    )
}

export default Main