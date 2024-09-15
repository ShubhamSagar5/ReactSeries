
import { Link } from "react-router-dom"
import RestaurantCard from "./RestaurantCard"

const ResSection = ({resData}) => {
    return (
        <div className="resSection">
        {
            resData.map((resData)=>{
                return (
                    <Link key={resData.info.id} to={"restaurantMenu/"+ resData.info.id}><RestaurantCard  resData={resData}/></Link>
                )
            })
        }
            
        </div>
    )
}

export default ResSection