import { useState } from "react";
const User = ( props) =>{
    const [count  ,setcount] = useState(0);
    return(
        <div className="user-card">
            <h1>count :{count}</h1>
            <h1>User Component {props.name}</h1>
        </div>
    );
};

export default User;