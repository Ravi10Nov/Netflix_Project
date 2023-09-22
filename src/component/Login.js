import { useState } from "react";
import { bg_logo } from "../utils/constant";
import Header from "./Header";

const Login = () =>{

    const [signUp , setSignup] = useState(false);
    
    const handleclick = () =>{
        setSignup(!signUp)
    }


    return(

        <div>
            <Header/>
            <div className="absolute">
                <img src={bg_logo} alt="Netflix_Logo" className="opacity-0.05 " />
            </div>

            <form onSubmit={e => e.preventDefault()} className="w-3/12 absolute p-12 bg-black my-36 mx-auto rounded-lg right-0 left-0 text-white opacity-90">

                <h1 className="font-bold text-3xl my-4 ">{signUp ? 'Sign up' : 'Sign in'}</h1>

                {signUp && <input type="text"  placeholder="Full Name" className="w-full my-2 p-2 bg-gray-700 rounded-lg" />}

                <input type="email"  placeholder="enter email id" className="w-full my-2 p-2 bg-gray-700 rounded-lg" />

                <input type="password"  placeholder="enter password" className="w-full my-2 p-2 bg-gray-700 rounded-lg" />

                {/* <p className="text-sm text-red-500">{errorMassage}</p> */}

                <button className="w-full my-2 p-2 bg-red-700 rounded-lg" >{signUp ? 'Sign up' : 'Sign in'}</button>

                <p className="my-4 cursor-pointer text-sm" onClick={handleclick}>{signUp ? 'Already have account? Sign in' : 'Create an account ? Sign up now'} now</p>
            </form>

        </div>

    )
}

export default Login;