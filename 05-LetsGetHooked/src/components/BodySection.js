import { useSelector } from "react-redux"
import { resData } from "../utility/resData"
import ShimmerUI from "../utility/ShimmerUI"
import useOnlineStatus from "../utility/useOnlineStatus"
import UserContext from "../utility/UserContext"
import OnlineStatus from "./OnlineStatus"
import ResSection from "./ResSection"
import {useContext, useEffect, useState} from 'react'

const BodySection = () => {
    


    const [resList,setResList] = useState([])
    const [copyList,setCopyList] = useState(resData) 
    const [searchText,setSearchText] = useState('')

    const onlineStatus = useOnlineStatus()
    const {LoginUser,handleLogin} = useContext(UserContext)


   
    const handleSearch = () => {
        const searchList = resList.filter((res)=>{
            return res.info.name.toLocaleLowerCase().includes(searchText.toLocaleLowerCase())
        })
        setCopyList(searchList)
    }

    const fetchData = async() => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.9974533&lng=73.78980229999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
        const resData = await data.json() 
        setResList(resData.data.cards[4].card.card.gridElements.infoWithStyle.restaurants)
        setCopyList(resData.data.cards[4].card.card.gridElements.infoWithStyle.restaurants)
    }
    
    useEffect(()=>{
        fetchData()
    },[])

    if(onlineStatus === false){
        return <OnlineStatus/>
    }

    return resList.length === 0 ? <ShimmerUI/> :  (
        <div className="bodySection">
            <div className="functionality">
            <div className="searchBar">
                {/* search bar */}
                <input className="mx-3 my-2 border border-black rounded-lg px-1" type="text" name="" id="" placeholder="Search Restaurant" value={searchText} onChange={(e)=>{
                    setSearchText(e.target.value)
                }} />
                <button className="bg-cyan-300 p-1 my-2 rounded-lg" onClick={handleSearch} >Search</button>
            </div>
            <div className="TopRated">
                <button className="mx-5 rounded-lg my-2 p-1 bg-cyan-300" onClick={()=>{
                   const filterList =  resList.filter((res)=>{
                   
                      return res.info.avgRating > 4.3
                    })
                        setCopyList(filterList)
                }}>Top Rated Restaurant</button>
            </div>
            <div className="my-5 flex gap-2">
                <label htmlFor="userName">Login Name</label>
                <input className="border border-black rounded-lg"  type="text" name="" id="userName" value={LoginUser} onChange={(e)=>{handleLogin(e.target.value)}} />
            </div>
            </div>
            <div>
            <ResSection resData={copyList}/>
            </div>

        </div>
    )
} 

export default BodySection