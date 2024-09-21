import { useDispatch, useSelector } from "react-redux"
import MenuSection from "./MenuSection"
import { clearCart } from "../utility/Slice/CartSlice"


const Cart = () => {
    

    const list = useSelector((store)=>store?.Cart.items)

    const dispatch = useDispatch()

    const handleClearCart = () => {
        dispatch(clearCart())
    }

    return (
        <div className="text-center">
            
            <p className="font-bold text-2xl">Cart</p>

            <div className="">
                <button className="p-2 m-2 bg-black text-white rounded-lg" onClick={handleClearCart}>Clear Cart</button>
                <div>
                    <MenuSection list={list}/>
                </div>
            </div>
        </div>
    )
}

export default Cart