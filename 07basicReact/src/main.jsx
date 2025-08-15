import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Layout from './Layout.jsx'
import Home from './Components/Home.jsx'
import About from './Components/About.jsx'
import Contact from './Components/Contact.jsx'
import User from './Components/User.jsx'
import Github from './Components/Github.jsx'
import axios from "axios";


const router = createBrowserRouter([{
  path:'/',
  element: <Layout/>,
  children: [
    {
      path:"",
      element: <Home/>
    },
    {
      path:"about",
      element: <About/>
    },
    {
      path:"contact",
      element: <Contact/>
    },
    {
      path:"user/:id",
      element: <User/>
    },
    {
      // with async and await
      // loader: async ()=>{
      //     let res = await fetch("https://api.github.com/users/Ank4031");
      //     let data = await res.json();
      //     return data;
      //   },

      // with fetch and then
      // loader: ()=>{
      //   return fetch("https://api.github.com/users/Ank4031")
      //   .then(res => res.json());
      // },

      // with axios
      loader: ()=>{
        return axios.get("https://api.github.com/users/Ank4031")
        .then(res => res.data)
      },
      path:"github",
      element: <Github/>
    }
  ]
}])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
