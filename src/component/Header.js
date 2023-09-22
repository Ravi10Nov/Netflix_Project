import { netflix_logo } from "../utils/constant";

const Header = () => {

    return(

        <div className="absolute px-8 py-2 bg-gradient-to-b from-black z-10 w-full flex justify-between">
            <div className="w-44 ">
                <img src={netflix_logo}/>
            </div>

            <div className="">
                <button className="p-2 m-2 bg-red-700 rounded-lg ">Sign out</button>
            </div>
        </div>

    )

}

export default Header;