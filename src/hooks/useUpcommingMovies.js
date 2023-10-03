import { useDispatch } from "react-redux";
import { options } from "../utils/constant"
import { useEffect } from "react";
import { addUpcommingMovies } from "../utils/movieSlice";

const useUpcommingMovies = () =>{

    const dispatch = useDispatch();

    const upcommingMovies = async () =>{
        const data = await fetch('https://api.themoviedb.org/3/movie/upcoming',options);
        const json = await data.json();
        dispatch(addUpcommingMovies(json?.results));

    }

    useEffect(()=>{
        upcommingMovies();
    },[])
}

export default useUpcommingMovies;