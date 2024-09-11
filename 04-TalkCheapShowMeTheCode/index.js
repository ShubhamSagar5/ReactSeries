import React from "react";
import ReactDom from "react-dom/client";
import { resData } from "./resData";

//https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/rfcfoudtda1n7qqgbi4c

const HeaderSection = () => {
    return (
        <div className="headerSection">
            <div className="appLogo">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdaMYtVi9_tfNcpsbGGseU6ehYgV9UeU3h7A&s" alt="" />
            </div>
            <div className="navList">
                <ul>
                    <li>Home</li>
                    <li>Contact Us</li>
                    <li>AboutUs</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
}

const BodySection = () => {
    return (
        <div className="bodySection">
            <div className="searchBar">
                {/* search bar */}
                <input type="text" name="" id="" placeholder="Search Restaurant" />
                <button>Search</button>
            </div>
            <div>
            <ResSection />
            </div>
        </div>
    )
} 


const RestaurantCard = ({resData}) => {
    
    const {name,cloudinaryImageId,areaName,costForTwo,cuisines} = resData?.info
    
    return (
        <div className="resCard">
            <div><img src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+cloudinaryImageId} alt="" /></div>
            <p>{name}</p>
            <p>{areaName}</p>
            <p>{cuisines.slice(0,2).join(",")}</p>
            <p>{costForTwo}</p>
        </div>
    )
}

const ResSection = () => {
    return (
        <div className="resSection">
        {
            resData.map((resData)=>{
                return (
                    <RestaurantCard key={resData.info.id} resData={resData}/>
                )
            })
        }
            
        </div>
    )
}

const FooterSection = () => {
    return (
        <div>

        </div>
    )
}

const MainSection = () => {
    return (
        <div>
            <HeaderSection/>
            <BodySection/>
            <FooterSection/>
        </div>
    )
}



const App = () => {
    return (
        <div>
            <MainSection/>
        </div>
    )
}


const root = ReactDom.createRoot(document.getElementById("root"))

root.render(<App/>)
