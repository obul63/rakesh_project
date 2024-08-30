import React from 'react'
 import Navbar from './Components/Nabar'
 import Checkbmi from './Components/Checkbmi'
 import Food from "./Components/Food"
 import Movies from "./Components/Movies"
 import News from './Components/News'
import Contacts from './Components/Contacts'
 import Products from './Components/Products'
 import Weather from './Components/Weather'
 import Home from "./Components/Home"
 import Login from './Components/Login'
import API from './Components/API'
import Footer from './Components/Footer'
 import { BrowserRouter, Routes, Route } from "react-router-dom"
export default function App() {

  return (
    <div>
 <BrowserRouter>
<Navbar/>
 <Routes>
          <Route path="/" element={<Home />}></Route> 
          <Route path="/Home" element={<Home />}></Route>         
           <Route path="/Weather" element={<Weather />}></Route>
          <Route path="/News" element={<News />}></Route>
          <Route path="/Food" element={<Food />}></Route>
          <Route path="/Movies" element={<Movies />}></Route>
          <Route path="/Products" element={<Products />}></Route>
          <Route path="/Contacts" element={<Contacts/>}></Route>
          <Route path="/Checkbmi" element={<Checkbmi />}></Route>
          <Route path="/Login" element={<Login />}></Route>
          <Route path="/API" element={<API />}></Route>
        </Routes>
    
      </BrowserRouter>

       </div>
  )
}
