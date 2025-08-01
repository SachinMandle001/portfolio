import React from 'react'
import Home from './pages/Home'
import {BrowserRouter,Routes,Route,Link} from'react-router-dom'
import About from './pages/About'
import Skill from './pages/Skill'
import Projects from './pages/Projects'
import Contact from './pages/Contact'
import Login from './components/loginpage/Login'
import Register from './components/loginpage/Register'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';



const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
      once: false, // allow re-animation when scrolling back
      mirror: true // optional: animate when scrolling up
    });
  }, []);

  return (
    <>
    <BrowserRouter>
    <Routes>
    <Route path='/'element={<Home/>}></Route>
    <Route path='/about'element={<About/>}></Route>
    <Route path='/skills'element={<Skill/>}></Route>
    <Route path='/projects'element={<Projects/>}></Route>
    <Route path='/contact'element={<Contact/>}></Route>
    <Route path='/login'element={<Login/>}></Route>
     <Route path='/register'element={<Register/>}></Route>

    </Routes>
    </BrowserRouter>
    
    </>
    )
}

export default App