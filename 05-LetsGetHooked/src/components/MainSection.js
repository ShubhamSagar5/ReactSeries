import { Outlet } from "react-router-dom"
import BodySection from "./BodySection"
import FooterSection from "./FooterSection"
import HeaderSection from "./HeaderSection"

const MainSection = () => {
    return (
        <div>
            <HeaderSection/>
            <Outlet/>
            <FooterSection/>
        </div>
    )
}

export default MainSection