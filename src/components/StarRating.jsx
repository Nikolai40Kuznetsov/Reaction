import { movies } from "../storage/movie_data";
import StarImg from "../assets/Zvezdochka.jpg"
import GreyStarImg from "../assets/ZvezdochkaGrey.jpg"

function StarRating({title}){
    let star;
    movies.map((item) => {
        if(item.title === title){
            star = item.star
        }
    })
    let starLine = [1, 2, 3, 4, 5]
    return(
        <div className="starRating">
            {
                starLine.map((item) => {
                    if(item <= star){
                        return(
                        <img src={StarImg} />
                    )
            }else{
                return(
                    <img src={GreyStarImg} />
                )
            }})
            }
        </div>
    )
}
export default StarRating;