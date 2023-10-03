import { useDispatch } from "react-redux";
import { options } from "../utils/constant"
import { addPopularMovie } from "../utils/movieSlice";
import { useEffect } from "react";

const usePopularMovie = () =>{

    const dispatch = useDispatch();
    
    const getPopularMovie = async ()=>{

        const data = await fetch('https://api.themoviedb.org/3/movie/popular',options);
        const json = await data.json();
        dispatch(addPopularMovie(json.results))

    }

    useEffect(()=>{
        getPopularMovie();
    },[])
}

export default usePopularMovie;