import { useSelector } from "react-redux";
import Title from "./Title";
import Video from "./Video";

const MainContainer = ()=>{

    const movies = useSelector(store=>store?.movies?.nowPlayingMovies);
    if (!movies) return;

    const x = Math.floor(Math.random()*(movies.length));

    const mainMovies = movies[x];

    const {original_title , overview ,id} = mainMovies;

    return(
        <div className="pt-[30%] bg-black md:pt-0">
            <Title title = {original_title} overview = {overview}/>
            <Video movieId={id}/>
        </div>
    )
}

export default MainContainer;