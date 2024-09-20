import React, { useState } from "react";
import MenuSection from "./MenuSection";

const MenuList = ({ data }) => {
  
  console.log(data)
    const [activeIndex, setActiveIndex] = useState(null); 

    const handleShowItem = (index) => {
        setActiveIndex(activeIndex === index ? null : index)
    }
    return (
    <div className="m-2 w-6/12 mx-auto">
      <div>
        {data.map((card,index) => {
          return (
            <div key={card?.card?.card?.title} className=" bg-gray-200 border shadow-lg my-5 p-2 rounded-lg" onClick={()=>handleShowItem(index)} >
              <div className="flex justify-between text-2xl font-semibold">
                 <div>{card?.card?.card?.title} ({card?.card?.card?.itemCards.length})</div>
              <div>
              {activeIndex === index ? '🔼' : '🔻'}  
              </div>
              </div>
              
               {activeIndex === index ? <MenuSection list={card?.card?.card?.itemCards}  /> : ''} 
              
                
             
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MenuList;
