import { movies } from "../storage/movie_data"
import { NavLink, useParams } from 'react-router-dom'

function Main(){
    const { genre } = useParams()
    let genreDuplicate = []
    let filterMovies = []

    for(let i = 0; i < movies.length; ++i){
        genreDuplicate[i] = movies[i].genre;
    }

    const genres = genreDuplicate.filter((item, index, self) => {
        return self.indexOf(item) === index;
    });

    if(genre){
        filterMovies = movies.filter(item => item.genre === genre)
    } else{
        filterMovies = movies
    }

    return(
        <>
            <div>
                {genres.map(item => {
                    return(
                        <>
                        <NavLink to={'/genre/' + item}>{item}</NavLink>
                        </>
                    )
                })}
            </div>
            {filterMovies.map((item)=>{
                return(<>
                            <NavLink className={"title"} to={'/'+ item.title}>
                                <h2>{item.title}</h2>
                                <img  src={item.img}/>
                            </NavLink>
                            </>
                        )})} 
        </>          
    )

}

export default Main