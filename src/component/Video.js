import { useSelector } from "react-redux";
import useTarilerVideos from "../hooks/useTrailerVideo";

const Video = ({movieId}) =>{

    useTarilerVideos(movieId);

    const trailerVideo = useSelector(store => store?.movies?.trailerVideo);


    return(
        <div className="">
            <iframe className=" w-screen aspect-video "
             src={"https://www.youtube.com/embed/"+trailerVideo?.key} title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
        </div>
    )
};

export default Video;