const RestaurantCard = ({resData}) => {
    
    const {name,cloudinaryImageId,areaName,costForTwo,cuisines,avgRating} = resData?.info
    
    return (
        <div className="resCard">
            <div><img src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+cloudinaryImageId} alt="" /></div>
            <p>{name}</p>
            <p>{areaName}</p>
            <p>{cuisines.slice(0,2).join(",")}</p>
            <p>{costForTwo}</p>
            <p>Rating : {avgRating}</p>
        </div>
    )
}

export default RestaurantCard 



export const VegHotel = (RestaurantCard) => {
    return (props) => {
        return (
            <div>
                <label className="absolute bg-black px-2 py-1 rounded-lg text-white">Veg</label>
                <RestaurantCard {...props}/>
            </div>
        )
    }
}

