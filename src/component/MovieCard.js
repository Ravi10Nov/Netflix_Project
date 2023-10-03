import {poster_url} from "../utils/constant"


const MovieCard = ({poster_path}) =>{
    return(
        <div className="w-30 md:w-48 pr-4">
            <img src={poster_url+poster_path} alt="Movie Card"/>

        </div>
    )
}
export default MovieCard;