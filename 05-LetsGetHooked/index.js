import React, {lazy, Suspense, useEffect, useState } from "react"
import ReactDom from "react-dom/client"
import MainSection from "./src/components/MainSection"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import BodySection from "./src/components/BodySection"
import RestaurantMenu from "./src/components/RestaurantMenu"
import UserContext from "./src/utility/UserContext"
import Cart from "./src/components/Cart"
import { Provider } from "react-redux"
import AppStore from "./src/utility/AppStore"

const App = () => {
    
    
    const [loginUser,setLoginUser] = useState()

    useEffect(()=>{
        const data = {
            name:"Hari"
        }
        setLoginUser(data.name)

    },[])
    
    return (
        <Provider store={AppStore}>
             <UserContext.Provider value={{LoginUser:loginUser,handleLogin:setLoginUser}}>
            <div>
            <MainSection/>
        </div>
        </UserContext.Provider>
        </Provider>
       
        
    )
}

const Grocery = lazy(()=>import("./src/components/Grocery"))
const AboutUs = lazy(()=>import("./src/components/AboutUs"))

const AppRouter = createBrowserRouter([
    {
        path:"/",
        element:<App/>,
        children:[
            {
                path:"/",
                element:<BodySection/>
            },
            {
                path:"/about",
                element:<Suspense fallback={<h2>Loading!!1</h2>}><AboutUs/></Suspense>
            },
            {
                path:"restaurantMenu/:resId",
                element:<RestaurantMenu/>
            },
            {
                path:"/grocery",
                element:<Suspense fallback={<h2>Loading!!</h2>}><Grocery/></Suspense>
            },
            {
                path:"/cart",
                element:<Cart/>
            }
        ]
    }
])

const root = ReactDom.createRoot(document.getElementById("root"))

root.render(<RouterProvider router={AppRouter}/>)
