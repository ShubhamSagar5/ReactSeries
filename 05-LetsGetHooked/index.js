import React from "react"
import ReactDom from "react-dom/client"
import MainSection from "./src/components/MainSection"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import BodySection from "./src/components/BodySection"
import AboutUs from "./src/components/AboutUs"
import RestaurantMenu from "./src/components/RestaurantMenu"

const App = () => {
    return (
        <div>
            <MainSection/>
        </div>
    )
}


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
                element:<AboutUs/>
            },
            {
                path:"restaurantMenu/:resId",
                element:<RestaurantMenu/>
            }
        ]
    }
])

const root = ReactDom.createRoot(document.getElementById("root"))

root.render(<RouterProvider router={AppRouter}/>)
