import { useSelector } from "react-redux";
import lang from "../utils/languageConstant";

const GptSearchBar = () => {

    const langkey = useSelector(store=>store.config.lang)

    return (
        <div className="pt-[35%] md:pt-[10%] flex justify-center">
            <form
                className="w-full md:w-1/2 bg-black grid grid-cols-12"
                
            >
                <input
                    // ref={searchText}
                    type="text"
                    className=" p-2 m-2 col-span-9"
                    placeholder={lang[langkey].gptSearchPlaceholder}
                />
                <button
                    className="col-span-3 m-2 py-2 px-2 bg-red-700 text-white rounded-lg">{lang[langkey].search}
                </button>
            </form>
        </div>
    )
};

export default GptSearchBar;