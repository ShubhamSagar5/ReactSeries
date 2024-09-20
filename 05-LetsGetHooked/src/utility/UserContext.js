import { createContext } from "react";



const UserContext = createContext({
    LoginUser:"amit",
    handleLogin:() => {}
})


export default UserContext