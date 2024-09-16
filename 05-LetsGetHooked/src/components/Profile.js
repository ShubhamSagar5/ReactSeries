import React from "react";

class Profile extends React.Component{
    
    constructor(props){
        super(props)
     this.state = {
            count:0,
            count2:5,
            user:[]
       
       
       
        }}

        async componentDidMount (){
            this.data = await fetch("https://api.github.com/users")
            this.json = await this.data.json()

            this.setState({
                user: this.json
            })
        
            this.timer = setInterval(() => {
                    console.log("Hello")
            }, 1000);
        }
        
        componentWillUnmount(){
            clearInterval(this.timer)
        }
        
   

        render(){
            console.log(this.state.user)
       const {name} = this.props


     
        return (
            <div>
                {/* <h2>{name}</h2>
                <h2>{this.props.Address}</h2>
                <img src={this} alt="" />      
                <h2>{this.state.count}</h2>
               <button onClick={()=>{
                    this.setState({
                        count:this.state.count + 1
                    })
               }}>Add Count by 1</button>
                <h2>{this.state.count2}</h2>
                <button onClick={()=>{
                    this.setState({
                        count2:this.state.count2 + 5
                    })
                }}>Add Count By 5</button>     */}


                {
                    this.state.user.map((user)=>{
                        return (
                            <div key={user.id} className="github">
                                <h2>{user.login}</h2>
                                <img src={user.avatar_url} alt="" />
                            </div>
                        )
                    })
                }

            </div>
        )
    }

}


export default Profile