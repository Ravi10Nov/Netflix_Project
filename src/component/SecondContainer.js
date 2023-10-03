import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SecondContainer = () => {

    const movies = useSelector((store) => store?.movies?.nowPlayingMovies);

    const popularMovie = useSelector((store)=>store?.movies?.popularMovie);

    const topReatedMovies = useSelector((store)=>store?.movies?.topRatedMovies);

    const upcommingMovies = useSelector((store)=>store?.movies?.upcommingMovies);

    const  allMovieCategory = (movies && popularMovie && topReatedMovies && upcommingMovies) 

    return (
        ( allMovieCategory &&  <div className="bg-black">
            <div className=" mt-0 md:-mt-44 -mx-0 pl-2 relative z-20">
                <MovieList movies={movies} title={'Now Playing Movie'} />
                <MovieList movies={topReatedMovies} title={'Top Rated Movie'} />
                <MovieList movies={popularMovie} title={'Popular Movie'} />
                <MovieList movies={upcommingMovies} title={'Upcomming Movie'} />
            </div>

        </div>)
    )
}

export default SecondContainer;