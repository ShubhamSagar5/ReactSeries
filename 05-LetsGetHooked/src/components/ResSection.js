
import RestaurantCard from "./RestaurantCard"

const ResSection = ({resData}) => {
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

export default ResSection