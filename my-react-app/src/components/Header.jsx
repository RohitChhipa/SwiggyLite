import { LOGO_URL } from "../utils/constant";
import { useState ,useEffect } from "react";
import { Link } from "react-router-dom";
const Header = () => {
  // let btnName = "Logout";// it's simple js variable 
  const [btnName, setbtnName] = useState("Login");// it's react state variable , it's passes by-default value login
  // once th setbtnName called inside return it will set the btnName with the neew value and again re-render the whole header and btnName comesup with the new value..,also here Diff algo  will useso that in the case of again re-rendering it will find the diff btw the div's and find only button get change.. 
  //here we also use 'reconsiliation algo to get the old btnName & new New btnName and find the diff and update only that part of the code..
                              // console.log("header rendered");
  //EVERY TIME WHEN COMPONENT RE-RENDER USEEFFECT WILL CALL , if no dependancy Array => useEffect is called every rendering..
  //if the dependancy Array is empty => useEffect is called only just once after the first rendering
  //if the dependancy Array is not empty => useEffect is called every time the value of the variable in the dependancy Array changes
                            useEffect(() =>{
                              console.log("useEffect called");
                            } , []);
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} alt="" />

      </div> 
      <div className="navitms">
        <ul>
          <li> <Link to="/">Home</Link> </li>
          <li> <Link to="/About">About-us</Link>  </li>
          <li> <Link to="/Contact">Contact-us</Link> </li>
          <li>Cart</li>
          <button className="btn" onClick={() => {
           btnName === 'Login' ?  setbtnName("Logout") : setbtnName("Login")
          }}>{btnName}</button>
          {/* once the onclick call back fn called, it will re-render the page and change the value setbtnName , and when it again re-render this page btnName it's behave like neew variable so it print the value "Logout" */}
        </ul>
      </div>
    </div>
  );
};
export default Header;