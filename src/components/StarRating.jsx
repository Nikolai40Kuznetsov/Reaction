import { movies } from "../storage/movie_data";
import StarImg from "../assets/Zvezdochka.jpg"
import GreyStarImg from "../assets/ZvezdochkaGrey.jpg"

function StarRating({ title }) {
    const movie = movies.find(m => m.title === title);
    const starCount = movie ? movie.star : 0;
    
    const stars = [1, 2, 3, 4, 5];

    return (
        <div className="starRating">
            {stars.map((num) => (
                <img 
                    key={num} 
                    src={num <= starCount ? StarImg : GreyStarImg} 
                    alt="star" 
                />
            ))}
        </div>
    );
}
export default StarRating;