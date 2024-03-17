import React from 'react'
import { Route, Routes } from "react-router-dom";
import './assets/styles/Main.scss'
import { routes } from './helpers/routes';
import Footer from './layout/Notes/footer/Footer';
import Navbar from './pages/notes/Navbar';

function App() {
  return (
    <div className='wrapper'>
      <Navbar/>
      <Routes>
        {
          routes.map((item) => (
            <Route path={item.path} element={item.element} key={item.path}/>
          ))
        }
      </Routes>
      <Footer/>
    </div>
  )
}

export default App