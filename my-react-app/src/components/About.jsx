import User from "./User";
import Userclass from "./Userclass";
import React from "react";

//class based About..
class About extends React.Component{
    constructor(props){
        super(props);
        console.log("p constructor");
    }

    componentDidMount(){
        //this is the lifecycle method of react.., and it will be called when the component is mounted.., IT is Used for call API's
        console.log("p Component Mounted");
    }
    render(){
        console.log("p render")
    return(
        <div>
            <h1>About us</h1>
           {/* <User  name={"Raj Chhipa fn"}/> */}
           <Userclass name={"Himanshuuu"} location={"Anand"} />
          
        </div>
    );
}
}

//Functional method..
// const About = ()=>{
  
//     return(
//         <div>
//             <h1>About us</h1>
//            <User  name={"Raj Chhipa fn"}/>
//            <Userclass name={"Himanshuuu"} location={"Anand"} />
//         </div>
//     );
// }

export default About;