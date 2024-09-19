import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ShimmerUI from '../utility/ShimmerUI'
import useRestaurantMenu from '../utility/useRestaurantMen'
import MenuList from './MenuList'

const RestaurantMenu = () => {
//   https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=19.9974533&lng=73.78980229999999&restaurantId=672969&catalog_qa=undefined&submitAction=ENTER

const {resId} = useParams()
    const RestaurantMenu = useRestaurantMenu(resId)
   
    const {ResName} = RestaurantMenu 
    const {ResMenu} = RestaurantMenu

    // const fetchResMenu = async() => {
    //     const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=19.9974533&lng=73.78980229999999&restaurantId="+resId+"&catalog_qa=undefined&submitAction=ENTER")
    //     const json = await data.json() 
        
    //     setResMenu(json.data.cards[4].groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards)
    //     setResName(json.data.cards[0]?.card?.card?.text)
        
    // }




    // useEffect(()=>{
    //     fetchResMenu()
    // },[])

 

    if(ResMenu === null){
        return <ShimmerUI/>
    }

    const ResList = ResMenu.filter((card)=>{
        return card?.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    })

    return (
        
    <div className='text-center'>
  
    <h2 className='text-xl font-semibold '>{ResName}</h2>
    <MenuList data={ResList}/>

   </div>
  )
}

export default RestaurantMenu 