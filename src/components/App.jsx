import React from "react"
import { BrowserRouter as Router, NavLink, Routes, Route } from "react-router-dom" 
import {About, Contacts, Error, Home, User} from "../pages/index"
import "../styles/App.scss"

export default function App () {
  return (
    <>
<Router> 
        <header>
            <nav>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/about">About</NavLink>
                <NavLink to="/contacts">Contact</NavLink>
            </nav>
        </header>
        <main>
      <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/contacts" element={<Contacts/>}/>
                <Route path="/about/:data" element={<User/>}/>
                <Route path="*" element={<Error/>}/>
            </Routes> 
        </main>
        <footer></footer>
 </Router> 
    </>
  )
};


