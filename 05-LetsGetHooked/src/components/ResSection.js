
import { Link } from "react-router-dom"
import RestaurantCard, { VegHotel } from "./RestaurantCard"

const ResSection = ({resData}) => {
    
    const VegHotelRes = VegHotel(RestaurantCard)

    return (
        <div className="resSection">
        {
            resData.map((resData)=>{
                return (
                    <Link key={resData.info.id} to={"restaurantMenu/"+ resData.info.id}>
                    
                    {
                        resData.info.veg ? <VegHotelRes resData={resData}/> : <RestaurantCard  resData={resData}/>
                    }

                    
                    </Link>
                )
            })
        }
            
        </div>
    )
}

export default ResSection