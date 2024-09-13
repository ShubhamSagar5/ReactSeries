import { resData } from "../utility/resData"
import ResSection from "./ResSection"
import {useState} from 'react'

const BodySection = () => {
    

    const [resList,setResList] = useState(resData)
    const [copyList,setCopyList] = useState(resData) 
    const [searchText,setSearchText] = useState('')

    const handleSearch = () => {
        const searchList = copyList.filter((res)=>{
            return res.info.name.toLocaleLowerCase().includes(searchText.toLocaleLowerCase())
        })
        setCopyList(searchList)
    }
    
    return (
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
                   const filterList =  copyList.filter((res)=>{
                      return res.info.avgRating > 4
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