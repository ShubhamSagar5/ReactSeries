import { useState } from "react"
import { Link } from "react-router-dom"
import useOnlineStatus from "../utility/useOnlineStatus"

const HeaderSection = () => {
    
    const [LogIn,setLogIn] = useState(true)
    const onlineStatus = useOnlineStatus()
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
                <ul>
                    <li>OnlineStatus : {onlineStatus ? "🟢" : "🔴"} </li>
                    <Link to={"/"}><li>Home</li></Link>
                    <Link><li>Contact Us</li></Link>
                    <Link to={"/about"}><li>AboutUs</li></Link>
                    <Link to={"/grocery"}><li>Grocery</li></Link>
                    <Link><li>Cart</li></Link>
                    <button className="logoutBTN" onClick={handleLogOut}>{LogIn ? "Login" : "LogOut"}</button>
                    {console.log(LogIn)}
                </ul>
            </div>
        </div>
    )
}

export default HeaderSection