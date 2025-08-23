import { useEffect, useState } from 'react'
import './App.css'
import conf from './config/config';
import { useDispatch } from 'react-redux';
import authService from './appwrite/auth.js';
import {login} from './store/authSlice.js';
import { Footer, Header } from './components/index.js';
import { Outlet } from 'react-router-dom';

function App() {
  const [loading, setLoading] = useState(true)
  const dispatch = useDispatch();

  useEffect(()=>{
    authService.getCurrentUser()
    .then((data)=>{
      if (data){
        console.log(data);
        dispatch(login({data}))
      }
      else{
        dispatch(logout());
      }      
    })
    .finally(()=>{
      setLoading(false);
    })
  },[])
  //loding state update...
  return !loading ?(
    <div className="min-h-screen flex justify-center bg-gray-400">
      <div className='w-full block text-center py-5'>
        <Header/>
        <main>
          TODO <Outlet/>
        </main>
        <Footer/>
      </div>
    </div>
  )
  :
  (<h1>Loading...</h1>)
}

export default App
