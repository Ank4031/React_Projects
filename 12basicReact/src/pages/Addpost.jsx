import React from "react";
import {PostForm} from "../components/index.js"
import {Container} from "../components/index.js"

export default function Addpost(){
    return (
        <div className="py-8">
            <Container>
                <PostForm/>
            </Container>
        </div>
    )
}