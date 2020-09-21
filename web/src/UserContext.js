import React from 'react';

export const UserContext = React.createContext();


async function UserLogin() {
   window.localStorage.getItem('nome');

}

export const UserStorage = ({children}) => {
    return (
        <UserContext.Provider value={{UserLogin}}>
            {children}
            </UserContext.Provider>

    )
}
