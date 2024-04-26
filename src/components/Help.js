import React from "react"
import UserClass from "./UserClass"

// const Help = () => {
//     return (
//         <div className="help-card">
//             <User name={"Raj Function"}/>
//             <UserClass name = {"Raj Class"}/>
//         </div>
//     )
// }

class Help extends React.Component{
    constructor(props){
        super(props)
        // console.log("Parent Constructor")
    }

    render(){
        // console.log("Parent Rendered")
        return (
            <div className="help-card">
                <UserClass/>
            </div>
        )
    }
}

export default Help