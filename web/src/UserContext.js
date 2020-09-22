import React from 'react';



export const UserContext = React.createContext(null);



export const UserStorage = ({children}) => {

 const userName = localStorage.getItem('nomeLogin');

    return  <UserContext.Provider value={userName} >{children} </UserContext.Provider>
};


