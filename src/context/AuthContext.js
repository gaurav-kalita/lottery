import React, {useContext, useState, useEffect} from 'react';
import { Children } from 'react';
import auth from '../firebase/config';
const AuthContext = React.createContext();

export function useAuth(){
    return useContext(AuthContext)
}

export function AuthProvider({children}) {
    const [currentUser, setCurrentUser] = useState();
    const [loading, setLoading] = useState(true);

    const login = (email, password)=>{
        return auth.signInWithEmailAndPassword(email, password)
    }

    // useEffect(() => {
    //     const unsubscribe = auth.onAuthStateChanged(user=>{
    //         setCurrentUser(user)
    //         setLoading(false)
    //     })
    //     return unsubscribe
    // }, [])

    const logout = () => {
        return auth.signout()
    }

    const value = {
        currentUser, 
        login,
        logout
    }

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext;
