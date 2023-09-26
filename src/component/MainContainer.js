import { useSelector } from "react-redux";
import Title from "./Title";
import Video from "./Video";

const MainContainer = ()=>{

    const movies = useSelector(store=>store?.movies?.nowPlayingMovies);
    if (!movies) return;

    const mainMovies = movies[0];

    const {original_title , overview} = mainMovies;

    console.log(mainMovies)

    return(
        <div>
            <Video/>
            <Title title = {original_title} overview = {overview}/>
        </div>
    )
}

export default MainContainer;