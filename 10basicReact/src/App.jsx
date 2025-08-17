import { use, useState , useEffect} from 'react'
import './App.css'
import { TodoContextProvider } from './Context/TodoContext';
import TodoForm from './Components/TodoForm';
import TodoItem from './Components/TodoItem';

function App() {
  const [todos, setTodos] = useState([]);
  
  const addTodo = (todo) => {
    setTodos(pre=>[...pre, {id: Date.now(), ...todo}]);
  }
  
  const updateTodo = (id, todo) => {
    setTodos(pre=>pre.map(t=> t.id === id ? todo : t))
  }

  const removeTodo = (id) => {
    setTodos(pre=> pre.filter(t => t.id!==id));
  }

  const toggleTodo = (id) =>{
    setTodos(pre=> pre.map(t=> {
      if(t.id === id) {
        return {...t, completed: !t.completed };
      }else{
        return t;
      }
    }));
  }

  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem('todos'))

    if (todos && todos.length>0) {
      setTodos(todos);
    }
  },[])

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos])

  return (
    <TodoContextProvider value={{todos, removeTodo, updateTodo, addTodo, toggleTodo}}>
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
            <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
            <div className="mb-4">
                {/* Todo form goes here */} 
                <TodoForm/>
            </div>
            <div className="flex flex-wrap gap-y-3">
                {/*Loop and Add TodoItem here */}
                {todos.map(todo=>(
                  <div className="w-full" key={todo.id}>
                    <TodoItem todo={todo} />
                  </div>
                ))}
            </div>
        </div>
      </div>
    </TodoContextProvider>
  )
}

export default App
