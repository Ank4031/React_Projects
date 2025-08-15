import { useState } from "react"
import { useEffect } from "react"
import { useLoaderData, useParams } from "react-router"

function Github(){
    const data = useLoaderData();
    console.log(data);
    
    // const [data, setdata] = useState(0)
    // useEffect(()=>{
    //     fetch("https://api.github.com/users/Ank4031")
    //     .then(res=>res.json())
    //     .then(data=>{
    //         console.log(data);
    //         useState(data.followers)
    //     })
    // },[])
    // const {id} = useParams();
    return (
        <>
        <div className="flex flex-col items-center bg-gray-600 w-full">
            <h1 className="text-white py-4">Github Followers: {data.followers}</h1>
            <img className="w-50 h-50" src={data.avatar_url} alt="img not loded" />
        </div>
        </>
    )
}

export default Github