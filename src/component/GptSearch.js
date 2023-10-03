import { bg_logo } from "../utils/constant";
import GptSearchBar from "./GptSearchBar";

const GptSearch = () => {
    return (
        <>
            <div className="absolute">
                <img src={bg_logo} alt="Netflix_Logo" className="opacity-0.05 " />
            </div>

            <div className="relative">
                <GptSearchBar />
                {/* <GptMovieSuggestions /> */}
            </div>
        </>
    )
}

export default GptSearch;