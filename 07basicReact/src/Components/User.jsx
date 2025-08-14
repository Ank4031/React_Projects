import { useParams } from "react-router"

function User(){
    const {id} = useParams();
    return (
        <h1 className="text-center bg-gray-600 text-white p-4">user id: {id}</h1>
    )
}

export default User