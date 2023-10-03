import { useSelector } from "react-redux";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import usePopularMovie from "../hooks/usePopularMovie";
import useTopRatedMovies from "../hooks/useTopRatedMovies"
import useUpcommingMovies from "../hooks/useUpcommingMovies"
import GptSearch from "./GptSearch";
import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondContainer from "./SecondContainer";


const Browse = () => {
    useNowPlayingMovies();
    usePopularMovie();
    useTopRatedMovies();
    useUpcommingMovies();

    const toggle = useSelector(store=>store.gpt.showGptSearch)

    return (

        <div className="">
            <Header />
            <div className="">
                {toggle ? <GptSearch/>:<>
                    <MainContainer />
                    <SecondContainer />
                </>}
                
                
            </div>

        </div>
    )
}

export default Browse;