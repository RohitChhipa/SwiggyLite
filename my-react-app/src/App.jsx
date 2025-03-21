// // import React from "react";
// // import ReactDOM from "react-dom/client";
// // // import "./index.css";
// // import { BrowserRouter  as Router , Routes , Route} from "react-router-dom";
// // import Header from "./components/Header";
// // import Body from "./components/Body";
// // import About from "./components/About";
// // import Contact from "./components/Contact";
// // import Error from "./components/Error";

// // const App = () => {
// //   return (
// //     <Router>
// //     <div className="App">
// //       <Header />
// //       {/* <Body />  , due to adding bdy here it will display every time and ,About , Contact are append with it  */}
// //       <Routes>
// //         <Route path="/" element={<Body />}  ></Route>
// //         <Route path="/About" element={<About />} ></Route>
// //         <Route path="/Contact" element={<Contact />} ></Route>
// //         <Route path="*" element={<Error />}></Route>
// //       </Routes>
// //     </div>
// //     </Router>
// //   )
// // };


import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./components/Header";

const App = () => {
  return (
    <div className="App">
      <Header />
      <Outlet /> {/* This will dynamically render the current route's component */}
    </div>
  );
};

export default App;
