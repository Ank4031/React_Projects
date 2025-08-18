import React from "react";
import {useSelector, useDispatch} from "react-redux";
import { removetodo } from "../todo/TodoSlice";


function Todos(){
    const todo = useSelector(state=> state.todos)
    console.log(todo);
    console.log("=====================================");
    
    const dispatch = useDispatch();
    return(
        <>
            <div>TODO</div>
            {todo.map(todo =>(
                <li id={todo.id}>
                    {todo.todo}
                    <button onClick={()=>{
                        dispatch(removetodo(todo.id))
                    }}>X</button>
                </li>
            ))}
        </>
    )
}

export default Todos;