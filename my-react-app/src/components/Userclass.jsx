//this is the Class Based Components Of User..

import React from "react";
class Userclass extends React.Component {
    constructor(props) { //this is the constructor used to fetch the props from the parent
        super(props); //thisis used to fetch the props from tthe About.jsx Userclass tag
        console.log(props);
        //now , i go to use the stste variables in the class based components like "useState" in functional components
        this.state = {
            userInfo: {
                name: "dfjkvn",
                location: "Anand",
                bio: "I am a student",
            }
        }
    }

    //for calling an API we have to make async function and call the API in this function
    async componentDidMount() {
        //  console.log("child Component Mounted");
        //Api call.
        const data = await fetch(" https://api.github.com/users/mahammadarsh");
        const json = await data.json();
        console.log(json);

        //this is the setState method to update the state variables
        this.setState({
            userInfo: json,
        });
    }
    render() {
        // if we don't want to use this.props every time we can fetch the props like this method...
        // const {count} = this.state ; //this is the destructuring method to fetch the state
        const { name, location, avatar_url, bio } = this.state.userInfo;
        return (
            <div className="user-card">
                <img className="logo" src={avatar_url} alt="" />
                <h2> Name :{name}</h2>
                <h2> Location: {location}</h2>
                <h3>Bio : {bio}</h3>
            </div>
        );

    };
}

export default Userclass;


// work flow:- initally  constructor called all the state variables are initialized and then the render
// method is called and then the component is mounted and then the API is called and then the state is updated
//  and then the render method is called again and the updated state is displayed on the screen..