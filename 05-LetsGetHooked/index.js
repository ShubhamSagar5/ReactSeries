import React, {lazy, Suspense } from "react"
import ReactDom from "react-dom/client"
import MainSection from "./src/components/MainSection"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import BodySection from "./src/components/BodySection"
import RestaurantMenu from "./src/components/RestaurantMenu"

const App = () => {
    return (
        <div>
            <MainSection/>
        </div>
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
            }
        ]
    }
])

const root = ReactDom.createRoot(document.getElementById("root"))

root.render(<RouterProvider router={AppRouter}/>)
