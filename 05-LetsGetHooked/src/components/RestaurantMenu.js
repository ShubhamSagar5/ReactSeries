import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ShimmerUI from '../utility/ShimmerUI'
import useRestaurantMenu from '../utility/useRestaurantMen'

const RestaurantMenu = () => {
//   https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=19.9974533&lng=73.78980229999999&restaurantId=672969&catalog_qa=undefined&submitAction=ENTER

const {resId} = useParams()
    const RestaurantMenu = useRestaurantMenu(resId)
    console.log(RestaurantMenu)
    const {resMenu} = RestaurantMenu 
    const {ResName} = RestaurantMenu 
    

    // const fetchResMenu = async() => {
    //     const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=19.9974533&lng=73.78980229999999&restaurantId="+resId+"&catalog_qa=undefined&submitAction=ENTER")
    //     const json = await data.json() 
        
    //     setResMenu(json.data.cards[4].groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards)
    //     setResName(json.data.cards[0]?.card?.card?.text)
        
    // }




    // useEffect(()=>{
    //     fetchResMenu()
    // },[])

    if(resMenu === null){
        return <ShimmerUI/>
    }

    return (
    <div>
    <h2>{ResName}</h2>
        {console.log(resMenu)}
        {
            resMenu.map((menu,index)=>{
                return(
                  
                    <p key={index}>{menu.card.info.name} - Rs.{menu.card.info.defaultPrice/100 || menu.card.info.price/100 }</p>
                )
            })
        }

   </div>
  )
}

export default RestaurantMenu 