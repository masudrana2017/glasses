import { createUserWithEmailAndPassword } from "firebase/auth";
import { createContext, useState } from "react";
import auth from "../firebase/firebase.config";

export const AuthContext=createContext(null)
const AuthProvider = ({children}) => {
    const [user,setUser]=useState()
    const createUser=(email,password)=>{
       return createUserWithEmailAndPassword(auth,email,password)
    }
    const authInfo={createUser}
    return (
        <div>
            <AuthContext.Provider value={authInfo}>
            {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;