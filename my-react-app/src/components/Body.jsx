// // const restaurantList = 
// we can  pass the porps like also , const RestaurantCard = (props)  -> const {resName , cuisine} = props
// const RestaurantCard = (props) => {
//     // console.log(props)
//     return (<div className="res-card">

//         <img className="res-img" src="/17.jpg" alt="" />
//         <h3> {props.resname}</h3>
//         {/* <h3> Sahayog</h3> */}
//         <h4>Pizza</h4> {props.cuisine}
//         <h4>4.3 stars</h4>
//         <h4>23 minutes</h4>
//     </div>
//     );
// };

// const Body = () => {
//     return (
//         <div className="body">
//             <div className="search">Search</div>
//             <div className="res-container">
//                 <RestaurantCard resname="Sahayog" cuisine="pizza"/>
//                 <RestaurantCard resname="Kapil" cuisine="biriyani"/>
//             </div>
//         </div>
//     )
// }
// export default Body;
  
  // const RestaurantCard = ({ name, cuisine, rating, time, img }) => {
  //   return (
  //     <div className="res-card">
  //       <img className="res-img" src={img} alt={name} />
  //       <h3>{name}</h3>
  //       <h4>{cuisine}</h4>
  //       <h4>{rating}</h4>
  //       <h4>{time}</h4>
  //     </div>
  //   );
  // };
  

import RestaurantCard from "./RestaurantCard";
// import restaurantList from "../utils/mockData" ;
import { useEffect, useState } from "react";  //import as named import
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
    const Body = () => {
      // local state variable - super powerful vaariable..(HOOKS....) ,if we wamt to modify this state vaiable listofRestaurant we have use setlistofRestaurant
      // const  [listOfRestaurant , setlistofRestaurant] = useState( [
      //         {
      //       data : {
      //         "id": "102216",
      //         "name": "McDonald's",
      //         "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/9/18/eee88869-37a5-48ea-98b2-011c70f0fde4_102216.jpg",
      //         "locality": "Anand Sojitra Road",
      //         "areaName": "Vallabh Vidyanagar",
      //         "costForTwo": "₹500 for two",
      //         "cuisines": [
      //           "Burgers",
      //           "Beverages",
      //           "Cafe",
      //           "Desserts"
      //         ],
      //         "avgRating": 4.4,
      //         "parentId": "630",
      //         "avgRatingString": "4.4",
      //         "totalRatingsString": "6.2K+",
      //         "sla": {
      //           "deliveryTime": 21,
                
      //         }      
      //   }
      //     },{
      //       data : {
      //         "id": "102217",
      //         "name": "domino's",
      //         "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/9/18/eee88869-37a5-48ea-98b2-011c70f0fde4_102216.jpg",
      //         "locality": "Anand Sojitra Road",
      //         "areaName": "Vallabh Vidyanagar",
      //         "costForTwo": "₹400 for two",
      //         "cuisines": [
      //           "Burgers",
      //           "Beverages",
      //           "Cafe",
      //           "Desserts"
      //         ],
      //         "avgRating": 3.4,
      //         "parentId": "630",
      //         "avgRatingString": "4.4",
      //         "totalRatingsString": "6.2K+",
      //         "sla": {
      //           "deliveryTime": 21,
             
      //         }      
      //   }
      //     }]); 
        // //can pass default value inside state paranthesis..
    //NOW WE ARE PASSING OUR WHOLE MOCKDATA..
    const [listOfRestaurant, setlistofRestaurant] = useState([]);
    const[searchText , setSearchText] = useState(""); //searchText is the state variable and setSearchText is the function to set the value of searchTex
      const[filteredRestaurant , setFilteredRestaurant] = useState([]); //filteredRestaurant is the state variable and setFilteredRestaurant is the function to set the value of filteredRestaurant
  //  // useEffect is a hook that runs after the first render(BODY) and after every update ,, whole body will render after that it's callback fn run..
    useEffect(()=>{
      fetchData(); //fetch data from api
    } , []);
 const fetchData = async () => {
  try {
    const response = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.5536708&lng=72.95417669999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await response.json();

    // Debug API response
    console.log("Fetched JSON:", json);

    // Extracting restaurant data correctly from the JSON response
    const restaurantsCard = json?.data?.cards?.find(
      (card) => card.card?.card?.gridElements?.infoWithStyle?.restaurants
    );

    const restaurants = restaurantsCard?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];

    console.log("Extracted Restaurants:", restaurants);

    setlistofRestaurant(restaurants);
    setFilteredRestaurant(restaurants); //put all the res data initiall on the filteredRestaurant which r coming ffrom the  API
  } catch (error) {
    console.error("Failed to fetch data:", error);
  }
};

    return listOfRestaurant.length === 0 ? < Shimmer /> : (
      <div className="body">
        <div className="filter">
          <div className="search">
            <input type="text"  className="search-box" value={searchText}  onChange={(e) =>{
                   setSearchText(e.target.value);  //it will set the value of searchtext with the value of input box & re-render the body content with the new value of searchtext
            }}/>
            <button className="btn" onClick={()=>{ 
              console.log(searchText);
              const filteredRestaurant = listOfRestaurant.filter((restaurant) => 
                restaurant.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilteredRestaurant(filteredRestaurant);

            }}>Search</button>
          </div>
          <button className="filter-btn" onClick={() =>{
            //filter code here , means-> when btn clicked it will show listed restaurant accoding to the callback fn. , now using hooks we have pass the filterd list intto the setlistofrestaurant  
            const filteredList = listOfRestaurant.filter((res) => res.info.avgRating > 4.5 );
            console.log(listOfRestaurant)
            setlistofRestaurant(filteredList);
          }}>Top Rated Restaurants</button>
        </div>
        <div className="res-container">
          {filteredRestaurant.map((restaurant) => (
   <Link key={restaurant.info.id} to={`/restaurants/${restaurant.info.id}`}>
     <RestaurantCard resData={restaurant.info} />
   </Link>
            // not using keys(not acceptable) <<<< index as key <<<<unique id(BEST...)  , if u haven't unique id then & then use index as key
          ))}
        </div>
      </div>
    );
  };
  
  export default Body;
  