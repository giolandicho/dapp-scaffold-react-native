import React, {createContext,ReactNode,useContext, useState} from "react";

export interface AuthUser{
    username: string;
    password: string;
}
interface AuthProviderContext{
    currentUser?: AuthUser | null;
    login: (username: string, password: string) => void;
    logout: (user?: AuthUser) => void;
    signup: (username: string, password: string) => void;
}
export const AuthContext = createContext<AuthProviderContext>({
    login(username: string, password: string){},
    logout(user?: AuthUser){},
    signup(username: string, password: string){},
})
const AuthProvider = (props: {children: ReactNode}) => {
    const {children} = props;
    const [currentUser, setCurrentUser] = useState<AuthUser>()
    const login = (username: string, password: string) => {
        setCurrentUser({
            username,
            password
        });
        console.log(currentUser)
    }
    const logout = (user?: AuthUser) => {
        setCurrentUser(undefined);
    }
    const signup = (username: string, password: string) => {
        setCurrentUser({
            username,
            password,
        })
    }
    const value = {
        currentUser,
        login,
        logout,
        signup,
    }
    return(
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider;