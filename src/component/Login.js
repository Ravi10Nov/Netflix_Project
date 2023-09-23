import { useRef, useState } from "react";
import { bg_logo } from "../utils/constant";
import Header from "./Header";
import ValidateForm from "../utils/validateForm";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../utils/firebase"
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";

const Login = () => {

    const [signUp, setSignup] = useState(false);

    const [errorMassage1, setErrorMassage] = useState(null);

    const dispatch = useDispatch();
    

    const email = useRef(null);
    const password = useRef(null);
    const name = useRef(null);

    const handleclick = () => {
        setSignup(!signUp)
    }

    const handleFormSubmit = () => {

        const massage = ValidateForm(email.current.value, password.current.value);
        setErrorMassage(massage)

        if (massage) return;

        if (signUp) {
            createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                    const user = userCredential.user;
                    updateProfile(user, {
                        displayName: name.current.value, 
                        photoURL: ""
                      }).then(() => {
                        const {uid,email,displayName} = auth.currentUser;
                        dispatch(addUser({uid:uid,email:email,displayName:displayName}))
                      }).catch((error) => {
                        setErrorMassage(error.massage)
                      });
                    
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setErrorMassage(errorCode + '  ' + errorMessage)
                });

        }
        else {
            signInWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                    const user = userCredential.user;
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setErrorMassage(errorCode+'  '+errorMessage )
                });

        };
    }


        return (

            <div>
                <Header />
                <div className="absolute">
                    <img src={bg_logo} alt="Netflix_Logo" className="opacity-0.05 " />
                </div>

                <form onSubmit={e => e.preventDefault()} className="w-3/12 absolute p-12 bg-black my-36 mx-auto rounded-lg right-0 left-0 text-white opacity-90">

                    <h1 className="font-bold text-3xl my-4 ">{signUp ? 'Sign up' : 'Sign in'}</h1>

                    {signUp && <input type="text" ref={name} placeholder="Full Name" className="w-full my-2 p-2 bg-gray-700 rounded-lg" />}

                    <input type="email" ref={email} placeholder="enter email id" className="w-full my-2 p-2 bg-gray-700 rounded-lg" />

                    <input type="password" ref={password} placeholder="enter password" className="w-full my-2 p-2 bg-gray-700 rounded-lg" />

                    <p className="text-sm text-red-500">{errorMassage1}</p>

                    <button className="w-full my-2 p-2 bg-red-700 rounded-lg" onClick={handleFormSubmit} >{signUp ? 'Sign up' : 'Sign in'}</button>

                    <p className="my-4 cursor-pointer text-sm" onClick={handleclick}>{!signUp ? 'Create an account ? Sign up now' : 'Already have account? Sign in'} now</p>
                </form>

            </div>

        )
    }

    export default Login;