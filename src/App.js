
import './App.css';

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Signup from './pages/Signuppage/Signup'
import Login from './pages/loginpage/Login'
import Home from './pages/Home/Home'
import { Provider } from 'react-redux'
import Store from './Redux/Store'
import Profile from './pages/Profile/Profile';
import { useEffect } from 'react';
import { loginAction } from './Redux/userSlice'; 
import { useDispatch, useSelector } from 'react-redux'






function App() {





  return (
<Provider store={Store}>

    <BrowserRouter>

      <div>



      <Routes>
     
          <Route path='/signup' element={<Signup />} />
          <Route path='/login' element={<Login/>} />
          <Route path='/' element={<Home/>} />
          <Route path='/profile' element={<Profile/>} />
         
        </Routes>

     
     



      </div>
    </BrowserRouter>
</Provider> 
  );
}

export default App;
