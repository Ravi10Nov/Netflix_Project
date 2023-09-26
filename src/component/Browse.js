import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondContainer from "./SecondContainer";


const Browse = () => {
    useNowPlayingMovies();

    return(

        <div>
            <Header/>
            <div className="relative top-44">
                <MainContainer/>
                <SecondContainer/>
            </div>
        </div>
    )
}

export default Browse;