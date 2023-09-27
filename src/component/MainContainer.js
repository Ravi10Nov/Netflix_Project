import { useSelector } from "react-redux";
import Title from "./Title";
import Video from "./Video";

const MainContainer = ()=>{

    const movies = useSelector(store=>store?.movies?.nowPlayingMovies);
    if (!movies) return;

    const mainMovies = movies[0];

    const {original_title , overview ,id} = mainMovies;

    // console.log(mainMovies)

    return(
        <div className="absolute top-0">
            <Title title = {original_title} overview = {overview}/>
            <Video movieId={id}/>
        </div>
    )
}

export default MainContainer;