import React from "react";
import service from "../appwrite/configure.js"
import { Link } from "react-router-dom";

function Postcard({
    $id, Title, Img
}){
    console.log("id: "+$id);
    console.log("title: "+Title);
    console.log("Img: "+Img);
    console.log("///////////////////////////////////////////////////////////////////////////");
    console.log(service.getFileView(Img));
    
    return(
        <Link to={`/post/${$id}`}>
            <div className="w-full bg-gray-100 rounded-xl p-4">
                <div className="w-full justify-center mb-4">
                    <img src={`${service.getFileView(Img).toString()}`} alt={Title} 
                    className="rounded-xl w-[150px] h-[100px]"
                    />

                </div>
                <h2 className="text-xl font-bold">{Title}</h2>
            </div>
        </Link>
    )
}


export default Postcard;