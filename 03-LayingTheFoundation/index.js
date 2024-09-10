import React from "react";
import ReactDOM from 'react-dom/client'

//------------------------Tasks -1 ------------------------------------ 


// const div = React.createElement("div",{id:"title"},[
//     React.createElement("h1",{id:"hOne"},"this is h1"),
//     React.createElement("h2",{id:"hTwo"},"this is h2"),
//     React.createElement("h3",{id:"hThree"},"this is h3")
// ])

// const root = ReactDOM.createRoot(document.getElementById("root"))

// root.render(div)

//-----------------------Tasks - 2 ------------------------------------ 

// const div = <div> 
//                 <h1>This is h1</h1>
//                 <h2>This is h2</h2>
//                 <h3>This is h3</h3>
//             </div>

// const root = ReactDOM.createRoot(document.getElementById("root"))
// root.render(div)



//-----------------------Tasks - 3 ------------------------------------ 

// const DivCom = () => {
//     return (
//         <div>
//             <h1>This is h1</h1>
//             <h2>This is h2</h2>
//             <h3>This is h3</h3>
//         </div>
//     )
// }


// const Content = <h1 className="title">This is func <DivCom/></h1>


// const root = ReactDOM.createRoot(document.getElementById("root"))
// root.render(<DivCom/>) 


//-----------------------Tasks - 4 ------------------------------------ 

// const DivCom = ({children}) => {
//     return (
//         <div>
//         {children}
//             <h1>This is h1</h1>
//             <h2>This is h2</h2>
//             <h3>This is h3</h3>
//         </div>
//     )
// }


// const Content = () => (
//    <div>
//     this is main content
//     <div>
//         <DivCom>Thissssss</DivCom>
//     </div>
//    </div>
// )


// const root = ReactDOM.createRoot(document.getElementById("root"))
// root.render(<Content/>) 





//--------------------------------Tasks 5 -------------------------------


const Navbar = () => {
    return (
        <div className="mainDiv" style={{backgroundColor:"aqua",margin:"0",padding:"2px",display:"flex",justifyContent:"space-between",alignItems:"center"}}>
            <div>
             <img style={{height:"50px", margin:"2px",borderRadius:"10px"}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgjNmTImqhhJvg1QCyZpWrZ_2eDBKsFmkjuA&s" alt="" />
            </div>
            <div>
                <input type="text" name="" id="" />
                <button>Search</button>
            </div>
            <div>
                <img style={{height:"50px", margin:"2px",borderRadius:"10px"}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwdKxIRjksVafQ72NgTnGQ6uvATF9jUgD_Pw&s" alt="" />
            </div>
            
        </div>
    )
}


const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<Navbar/>)