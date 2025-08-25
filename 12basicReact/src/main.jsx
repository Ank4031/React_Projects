import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Login from "./pages/Login.jsx"
import Allpost from "./pages/Allpost.jsx"
import Addpost from "./pages/Addpost.jsx"
import Home from "./pages/Home.jsx"
import Post from "./pages/Post.jsx"
import Editpost from './pages/Editpost.jsx'
import Authlayout from './components/Authlayout.jsx'
import { Provider } from 'react-redux'
import { BrowserRouter, createBrowserRouter, RouterProvider } from 'react-router-dom'
import store from './store/store.js'
import Signup from './components/Signup.jsx'

const router = createBrowserRouter([
  {
    path:'/',
    element: <App/>,
    children: [
      {
        path: '/',
        element: <Home/>
      },
      {
        path: '/login',
        element: (
          <Authlayout authentication={false}>
            <Login/>
          </Authlayout>
        )
      },
      {
        path: '/signup',
        element: (
          <Authlayout authentication={false}>
            <Signup/>
          </Authlayout>
        )
      },
      {
            path: "/all-posts",
            element: (
                <Authlayout authentication>
                    {" "}
                    <Allpost />
                </Authlayout>
            ),
        },
        {
            path: "/add-post",
            element: (
                <Authlayout authentication>
                    {" "}
                    <Addpost />
                </Authlayout>
            ),
        },
        {
            path: "/edit-post/:slug",
            element: (
                <Authlayout authentication>
                    {" "}
                    <Editpost />
                </Authlayout>
            ),
        },
        {
            path: "/post/:slug",
            element: <Post />,
        },
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <RouterProvider router={router}/>
  </Provider>
)
