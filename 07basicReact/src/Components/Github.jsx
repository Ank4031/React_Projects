import { useState } from "react"
import { useEffect } from "react"
import { useParams } from "react-router"

function Github(){
    const [data, setdata] = useState(0)
    useEffect(()=>{
        fetch("https://api.github.com/users/Ank4031")
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            useState(data.followers)
        })
    },[])
    // const {id} = useParams();
    return (
        <h1 className="text-center bg-gray-600 text-white p-4">Github Followers: {data}</h1>
    )
}

export default Github