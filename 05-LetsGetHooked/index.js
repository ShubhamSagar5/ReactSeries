import React from "react"
import ReactDom from "react-dom/client"
import MainSection from "./src/components/MainSection"

const App = () => {
    return (
        <div>
            <MainSection/>
        </div>
    )
}


const root = ReactDom.createRoot(document.getElementById("root"))

root.render(<App/>)
