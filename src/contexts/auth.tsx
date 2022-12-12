import { createContext, ReactNode, useContext, useEffect, useReducer, useState } from "react";
import { useNavigate } from "react-router-dom";

import { IAuth } from "../utils/utils";

type AuthContextProviderProps = {
    children: ReactNode;
}

type ActionAuth = {
    type: AuthActions
    payload: any
}

type ContextType = {
    stateAuth: IAuth
    dispatchAuth: (actionAuth: ActionAuth) => void
}

type AuthProviderProps = {
    children: ReactNode
}

const initialData: IAuth = {
    uid: '',
    acessToken: '',
    email: '',
    displayName: ''
}

const AuthContext = createContext<ContextType | undefined>(undefined);



export enum AuthActions {
    setUid,
    setAcessToken,
    setDisplayName,
    setEmail,
    setAuth,
    reset
}

const authReducer = (stateAuth: IAuth, actionAuth: ActionAuth) => {
    switch (actionAuth.type) {
        case AuthActions.setUid:
            return { ...stateAuth, uid: actionAuth.payload };
        case AuthActions.setAcessToken:
            return { ...stateAuth, acessToken: actionAuth.payload }
        case AuthActions.setDisplayName:
            return { ...stateAuth, displayName: actionAuth.payload };
        case AuthActions.setEmail:
            return { ...stateAuth, email: actionAuth.payload };
        case AuthActions.setAuth:
            return { ...actionAuth.payload }

        case AuthActions.reset:
            return initialData;
        default:
            return stateAuth;
    }
}

// const [user, setUser] = useState();

// localStorage.setItem('@GestaoHoras:user', id);
// localStorage.setItem('@GestaoHoras:displayName', display_name);
// localStorage.setItem('@GestaoHoras:acessToken', accessToken);
// localStorage.setItem('@GestaoHoras:email', email);
// localStorage.setItem('@GestaoHoras:photoURL', photo_url);

function HandleGetLocalStorageAuth() {


    let local_auth = initialData;


    let local_uid = localStorage.getItem('@GestaoHoras:auth');
    let local_displayName = localStorage.getItem('@GestaoHoras:displayName');
    let local_acessToken = localStorage.getItem('@GestaoHoras:acessToken');
    let local_email = localStorage.getItem('@GestaoHoras:email');

    local_uid && (local_auth.uid = local_uid);
    local_displayName && (local_auth.displayName = local_displayName);
    local_acessToken && (local_auth.acessToken = local_acessToken);
    local_email && (local_auth.email = local_email);

    return local_auth;
}



export const AuthProvider = ({ children }: AuthProviderProps) => {

    const [stateAuth, dispatchAuth] = useReducer(authReducer, initialData);
    const value = { stateAuth, dispatchAuth };



    useEffect(() => {
        dispatchAuth({
            type: AuthActions.setAuth,
            payload: HandleGetLocalStorageAuth()
        })
    }, [])




    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>

    );
}





export const useAuth = () => {
    const context = useContext(AuthContext);

    if (context === undefined) {
        throw new Error('useAuth precisa ser usado dentro do FormProvider');
    }
    return context;
}