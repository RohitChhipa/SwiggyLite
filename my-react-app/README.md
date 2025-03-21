# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh



//use jsx insted of js bcz in js if we use malicious api then it would be harmfull for us , jsx prevent it..
<!-- EPISODE 3 -->
<!-- // function App() {
//   return (
//     <>
//       <h1 id="heading">Hlo, I'm here!!</h1>
//     </>
//   );
// }
// const Title = () => (
//   <div>  <h1>Hlo im here kem cho!!</h1>
//   </div>

// );


// 2nd way to indicate it...it's Title Component 
const Title = function (){
   return (<div>
    <h1>Hlo im here , i m in Title Component</h1>
  </div>)
};
// const Title = () => (
//   <div>  <h1>Hlo im here kem cho!!</h1>
//   </div>

// );


//it's title element..
const elem =  <h2> <span>it's react elem</span> </h2>
const title =(
  <div>
    {/* element inside another elem */}
    
    <h1>I m in title Element!!</h1>
    { elem }
  </div>

)

//JS elements
const no = <h2>1000🚀</h2>;
const App = () => (

  <div id='container'>
    {/* here i put component->Title inside another component->App it's 'COMPONENT COMPANSION' now if i want to pput element inside the component...  */}
    <Title /> 
    {/* here element inside the Component */}
    {title} {no}
    <h1 id="heading">Hlo im here , it's main App component!!</h1>
  </div>


);

export default App;
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<App />); -->


<!-- REACT HOOKS -->
/*
they are normal JS utility function written by facebook developer
2 very imp hooks ->useState() ->used for generate super powerful state variable in react(MAINTAIN THE STATE OF THE VARIABLE OR FUN OF THE CODE..)
                 ->useEffect() 
Array De-Structring.. (2nd way of creating usEState Variable..)
const Arr = useState();
const[res , setres] =arr -->>
                const[res] =Arr[0]
                const[setres] = Arr[1]
//conditional rendering..
// if(listOfRestaurant.length === 0){
//   return <Shimmer />  //for creatin dummy cards before reloading page...
// }

  // useEffect(() => {
  //   fetchData();
  // }, []);

  // const fetchData = async () => {
  //   try {
  //     const response = await fetch(
  //       "https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.5536708&lng=72.95417669999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
  //     );
  //     const data = await response.json();

  //     // Check the structure of the fetched JSON data
  //     console.log("Fetched Data:", data);

  //     // Extracting restaurant data correctly from the JSON response
  //     const restaurants = data?.data?.cards?.find(card => card.cardType === "seeAllRestaurants")?.data?.data?.cards || [];
  //     console.log("Restaurants:", restaurants);
  //     setlistofRestaurant(restaurants);
  //   } catch (error) {
  //     console.error("Failed to fetch data:", error);
  //   }
  // };
 

      //it's NOrmal JS in which ListOfRestaurant in local state variable so make it powerful we used HOOKS..
//     let listOfRestaurant = [
//       {
//     data : {
//       "id": "102216",
//       "name": "McDonald's",
//       "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/9/18/eee88869-37a5-48ea-98b2-011c70f0fde4_102216.jpg",
//       "locality": "Anand Sojitra Road",
//       "areaName": "Vallabh Vidyanagar",
//       "costForTwo": "₹400 for two",
//       "cuisines": [
//         "Burgers",
//         "Beverages",
//         "Cafe",
//         "Desserts"
//       ],
//       "avgRating": 4.4,
//       "parentId": "630",
//       "avgRatingString": "4.4",
//       "totalRatingsString": "6.2K+",
//       "sla": {
//         "deliveryTime": 21,
        
//       }      
// }
//   },{
//     data : {
//       "id": "102217",
//       "name": "domino's",
//       "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/9/18/eee88869-37a5-48ea-98b2-011c70f0fde4_102216.jpg",
//       "locality": "Anand Sojitra Road",
//       "areaName": "Vallabh Vidyanagar",
//       "costForTwo": "₹400 for two",
//       "cuisines": [
//         "Burgers",
//         "Beverages",
//         "Cafe",
//         "Desserts"
//       ],
//       "avgRating": 3.4,
//       "parentId": "630",
//       "avgRatingString": "4.4",
//       "totalRatingsString": "6.2K+",
//       "sla": {
//         "deliveryTime": 21,
     
//       }      
// }
//   }];
# Reconciliation Algorith(ReactFiber);-
  if i have 7 res-car and now my UI change it to fit 3 res-card..when i have 7 cards it will create "VIRTUAL DOM" ->Axctual tag (<div> <img>) means axctual DOM , Reparesentaion of Actual DOM ()
# Diff Algo :-
  it indicates the diff btw prev VIRTUAL DOP & UPDATED VIRTUAL DOM
*/

/*
Monolith Architech:- All code like APi + Ui + AUTH + DB in a same project
MicroService Architech : Diff sertvices for diff project(seprataion of concerns)->  UI , AUTH ,DB ,NOTIFY combines all forms of App .. All seervices talk each other , all services run on their own port at the end all this services mp to the Domain ,  
# Approaches to fetch the data from the backend..
  1. Loads -> API ->Renderings UI
  2. Loads -> Rendering UI -> API -> re-render with new data  (USED IN REACT , better UX)

*/

/*
TWO TYPES OF ROUTING:-
  1.client side Routing:- ther is no network call , we have already data code and fetch that data using API..
  2.server side Routing:- make a network call , and a page .html comin from the server..& refresh the page content
*/

<!-- 
IN A REACT (CLASS BASED) THERE IS 2 PHASE FOR MOUNTING(THE UPLOADING THE DTA ONTO THE BROWSER..)
1.RENDERING
2.COMMIT

REACT LIFE CYCLE..
-PARENT CONSTRUCTOR
-PARENT RENDER

  -FIRST CHILD CONCSTRUCTOR
  -FIRST CHILD RENDER

  -SECOND CHILD CONSTRUCTOR
  -SECOND CHILD RENDER

  <DOM UPDATED- IN SINGLE BATCH , IT'S EXPENSIVE OP OF COMMITING.. SO PERFORMING IN A SINGLE BATCHING..>
  -FIRST CHILD COMPONENTDIDMOUNT
  -SECOND CHILD COMPONENETDIDMOUNT

PARENT COMPONENTDIDMOUNT.
 -->
 <!-- 
 const { name , location } = this.props; //this is the destructuring method to fetch the props
        return(
            <div className="user-card">
                <h1>User Classs Componenets..</h1>
                {/* <h1>count: {this.state.count}</h1> */}
                <h1>count: {count}</h1>
                <button onClick={() =>{
                    //NEVER UPDATE STATE VARIABLES DIRECTYLY..
                    this.setState({count : this.state.count + 1}); 
                }}>Count</button>
                <h2> name : {name}</h2>
                <h2> location : {location}</h2> 
                {/* <h2> name : {this.props.name}</h2>
                <h2> location : {this.props.location}</h2>  */}
                {/* //in a class based compo for fetching data always Use " this " keyword */}
            </div> -->
<!-- 
###### MOUNTING:-
   -CONSTRUCTOR(DUMMY)
   -render(dummy)
    <HTML> dummy
 * COMPONENTDIDMOUNT
    <API> calls
    <this.setstate> -> state var is updated..

####### UPDATE:-
  -rendering(with new API data)
  <HTML> load ith new APIdata..{img, name ,location}
   * COMPONENTDIDUPDATE


 -->