import {useEffect, useState} from  'react'

const useRestaurantMenu = (resId) => {
    
    
    const [resMenu,setResMenu] = useState(null)
    const [ResName,setResName] = useState(null)


    const fetchData  = async() => {
        const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=19.9974533&lng=73.78980229999999&restaurantId="+resId+"&catalog_qa=undefined&submitAction=ENTER")
        const json = await data.json()
        setResMenu(json.data.cards[4].groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards)
        setResName(json.data.cards[0]?.card?.card?.text)
    }

    useEffect(()=>{
        fetchData()
    },[])


    return {
        resMenu,
        ResName}
}

export default useRestaurantMenu