import { createContext, useContext } from "react";

const TodoContext = createContext({
    todos: [
        {
            id: 1,
            todo: "Learn React",
            completed: false
        }
    ],
    addTodo: (todo)=> {},
    updateTodo: (id, updatedTodo)=> {},
    removeTodo: (id)=> {},
    toggleTodo: (id)=> {}
});

export const TodoContextProvider = TodoContext.Provider

export  const useTodo = () => {
    return useContext(TodoContext);
}