import React from "react";
import Profile from "./Profile";

class AboutUs extends React.Component{
    constructor(props){
        super(props)
    }

  
    render(){
        
        this.state = {
        
        }
    
        
        
        return (
            <div>
                <div>My Profile</div>
                <Profile name = "Hari" Address="Nashik"/>
            </div>
            


        )
    }
        
    
}

export default AboutUs