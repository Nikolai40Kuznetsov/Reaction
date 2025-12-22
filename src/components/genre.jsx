import { movies } from "../storage/movie_data";
import { useParams } from "react-router-dom";

function Genre(){
    const param = useParams();
    return(
        movies.map(item => {
            if(item.genre === param.genre){
                return(
                    <>   
                            <div className="title">
                                <NavLink to={'/'+ item.title}>
                                    <img  src={item.img}/>
                                    <h2>{item.title}</h2>
                                </NavLink>
                            </div>
                    </>
                )
            }
        })
    )
}
export default Genre;