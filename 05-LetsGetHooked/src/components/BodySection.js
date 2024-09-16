import { resData } from "../utility/resData"
import ShimmerUI from "../utility/ShimmerUI"
import useOnlineStatus from "../utility/useOnlineStatus"
import OnlineStatus from "./OnlineStatus"
import ResSection from "./ResSection"
import {useEffect, useState} from 'react'

const BodySection = () => {
    

    const [resList,setResList] = useState([])
    const [copyList,setCopyList] = useState(resData) 
    const [searchText,setSearchText] = useState('')

    const onlineStatus = useOnlineStatus()
    console.log(onlineStatus)

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
                <input type="text" name="" id="" placeholder="Search Restaurant" value={searchText} onChange={(e)=>{
                    setSearchText(e.target.value)
                }} />
                <button className=""onClick={handleSearch} >Search</button>
            </div>
            <div className="TopRated">
                <button className="TopRatedBTN" onClick={()=>{
                   const filterList =  resList.filter((res)=>{
                   
                      return res.info.avgRating > 4.3
                    })
                        setCopyList(filterList)
                }}>Top Rated Restaurant</button>
            </div>
            </div>
            <div>
            <ResSection resData={copyList}/>
            </div>
        </div>
    )
} 

export default BodySection