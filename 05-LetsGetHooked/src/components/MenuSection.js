import React from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../utility/Slice/CartSlice";

const MenuSection = ({list}) => {
  
  
  const dispatch = useDispatch()

  const handleAddToCart = (menu) => {
    
    dispatch(addItem(menu))
  }
  
  return (
  
   
      <div>
      {list.map((menu) => {
        return (
          <div key={menu.card.info.id} className="flex justify-between gap-4 border border-b-black my-2 p-1">
            <div className="p-2 text-left">
              <div className="text-xl">{menu.card.info.name}</div>
              <div> ₹ {menu.card.info.price/100 || menu.card.info.defaultPrice/100 }</div>
              <div>{menu.card.info.description}</div>
              
            </div>
            <div className="p-2">
                <button className="bg-black text-white p-1 my-0.2 rounded-lg absolute -mx-11" onClick={()=>handleAddToCart(menu)}>Add To Cart</button>
                <div className="rounded-lg"><img className="rounded-lg w-[140px] h-[120px]" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+menu.card.info.imageId} alt="" /></div>

            </div>
          </div>
        );
      })}
    </div>
  ) 
};

export default MenuSection;
