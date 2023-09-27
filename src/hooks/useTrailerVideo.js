import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { options } from "../utils/constant";
import { addTrailerVideos } from "../utils/movieSlice";

const useTarilerVideos = (movieId) =>{

    
    const dispatch = useDispatch();

    
    const  getMovieVideos = async ()=>{

        const data = await fetch('https://api.themoviedb.org/3/movie/'+movieId+'/videos',options)

        const json = await data.json();

        const filterData = json?.results?.filter((video)=> video?.type === 'Trailer')

        const trailer = filterData?.length ? filterData[0]:json?.results[0];
        dispatch(addTrailerVideos(trailer))

        // console.log(trailer)

    }

    useEffect(()=>{
        getMovieVideos();
    },[])

};

export default useTarilerVideos;