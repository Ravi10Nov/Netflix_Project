import { useEffect } from "react";
import { SUPPORTED_LANGUAGES, netflix_logo } from "../utils/constant";
import { auth } from "../utils/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { useNavigate } from "react-router-dom";
import { toggleSearchView } from "../utils/gptSlice";
import { changeLanguage } from "../utils/configSlice";

const Header = () => {
    const user = useSelector(store=>store.user);

    const dispatch = useDispatch();
    const nevigate = useNavigate();
    const toggle = useSelector(store=>store.gpt.showGptSearch);

    const handleSignOut = () =>{
        signOut(auth).then(() => {
            // dispatch(removeUser())
          }).catch((error) => {
            // An error happened.
          });
    }

    useEffect(()=>{
        const unsbscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
              const {uid,email,displayName} = user;
              dispatch(addUser({uid:uid,email:email,displayName:displayName}))
              nevigate('/browse')
            } else {
                dispatch(removeUser())  
                nevigate('/')
            }
          });
          return()=>unsbscribe();
    },[])

    const gptToggle = ()=>{
        dispatch(toggleSearchView());
    }

    const handleLanguageChange = (e)=>{
        dispatch(changeLanguage(e.target.value))
    }

    return(

        <div className="absolute px-8 py-2 bg-gradient-to-b from-black z-10 w-full flex justify-between">
            <div className="w-44 ">
                <img src={netflix_logo} alt="Netflix-Logo"/>
            </div>

            {!user && <div className="">
                <div className="flex justify-end "> 
                <select className="p-2 m-2  bg-gray-600 text-white rounded-lg" onChange={handleLanguageChange} >
                        {SUPPORTED_LANGUAGES.map((lang)=><option key={lang.identifire} value={lang.identifire}>{lang.name}</option>)}
                    </select>
                </div>    
            </div>}

            {user && <div className="flex">
                <div>
                    <p className=" p-2 m-2 text-gray-300">{user.displayName}</p>
                </div>
                {toggle && <div >
                    <select className="p-2 m-2  bg-black text-white rounded-lg" onChange={handleLanguageChange} >
                        {SUPPORTED_LANGUAGES.map((lang)=><option key={lang.identifire} value={lang.identifire}>{lang.name}</option>)}
                    </select>
                </div> }
                <div>
                    <button className="p-2 m-2  bg-purple-800 rounded-lg " onClick={gptToggle} >{toggle ? 'Homepage':'GPT Search'}  </button>
                </div>
                <div>
                    <button className="p-2 m-2 bg-red-700 rounded-lg " onClick={handleSignOut}>Sign out</button>
                </div>           
            </div>}

            

            
        </div>

    )

}

export default Header;