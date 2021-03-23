import React from "react";
let  UserContext = React.createContext();

export default UserContext;

export const UserProvider = ([children])=>{
return <UserContext.Provider value={{name:"shashi"}}>
    {children}
</UserContext.Provider>

}