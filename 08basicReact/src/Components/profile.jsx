import React from "react";
import UserContext from "../Context/UserContext";
import { useContext } from "react";

function Profile(){
    const {user} = useContext(UserContext)
    if (!user) return(
        <div>
            <h1>Please Login</h1>
        </div>
    )
    return(
        <div>
            <h2>Welcome {user.username}</h2>
        </div>
    )
}

export default Profile