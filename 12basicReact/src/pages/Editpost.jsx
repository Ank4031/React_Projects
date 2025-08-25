import React, {useState, useEffect} from "react";
import {Container, PostForm} from "../components"
import service from "../appwrite/configure";
import { useNavigate, useParams } from "react-router-dom";

export default function Editpost(){
    const [post, setPosts] = useState([]);
    const {slug} = useParams()
    const navigate = useNavigate()
    console.log('slug: '+slug);
    
    useEffect(()=>{
        if (slug){
            service.getPost(slug).then((post)=>{
                if (post){
                    setPosts(post)
                }
            })
        } else{
            navigate('/')
        }
    },[slug, navigate])
    return post?(
        <div className="py-8">
            <Container>
                <PostForm post={post}/>
            </Container>
        </div>
    ):null
}