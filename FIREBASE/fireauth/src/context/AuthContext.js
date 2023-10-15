import { createContext, useReducer } from "react";

const AuthContext = createContext();

const authReducer = (state, action) =>{
    switch(action.type){
        default:
            return state
    }
}

const AuthContextProvider = ({children})=>{

    const [state, dispatch] = useReducer(authReducer,{user:null})

    return(
        <AuthContext.Provider value={}>
            {children}
        </AuthContext.Provider>
    )
}