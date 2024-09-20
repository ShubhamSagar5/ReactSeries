import { useContext, useState } from "react"
import { Link } from "react-router-dom"
import useOnlineStatus from "../utility/useOnlineStatus"
import UserContext from "../utility/UserContext"

const HeaderSection = () => {
    
    const [LogIn,setLogIn] = useState(true)
    
    const onlineStatus = useOnlineStatus()

    const {LoginUser} = useContext(UserContext)

    const handleLogOut = () => {
        if(LogIn){
            setLogIn(false)
        }else{
            setLogIn(true)
        }
    }

    return (
        <div className="headerSection">
            <div className="appLogo">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdaMYtVi9_tfNcpsbGGseU6ehYgV9UeU3h7A&s" alt="" />
            </div>
            <div className="navList">
                <ul className="gap-3">
                    <li>OnlineStatus : {onlineStatus ? "🟢" : "🔴"} </li>
                    <Link to={"/"}><li>Home</li></Link>
                    <Link><li>ContactUs</li></Link>
                    <Link to={"/about"}><li>AboutUs</li></Link>
                    <Link to={"/grocery"}><li>Grocery</li></Link>
                    <Link><li>Cart</li></Link>
                    <li>{LoginUser}</li>
                    <button className="logoutBTN" onClick={handleLogOut}>{LogIn ? "Login" : "LogOut"}</button>
                    
                </ul>
            </div>
        </div>
    )
}

export default HeaderSection