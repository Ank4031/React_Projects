import React,{useState, useEffect} from "react";
import service from "../appwrite/configure";
import { Container, Postcard } from "../components";

export default function Allpost(){
    const [post,setPost] = useState([]);
    useEffect(()=>{
        service.getPosts([]).then((posts)=>{posts?setPost(posts.documents):null})
        console.log('post: ',post);
    },[])
    return (
        <div className="w-full py-8">
            <Container>
                <div className="flex flex-wrap">
                    {post.map((p)=>(
                        <div key={p.$id} className="p-3">
                            <Postcard {...p}/>
                        </div>
                    ))}
                </div>
            </Container>
        </div>
    )
}