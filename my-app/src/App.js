import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';



import './App.scss';
import {Home, Login, SingleBlog} from "./pages";
import Navbar from './components/Navbar/Navbar';
import Sidebar from './components/Sidebar/Sidebar';
import Footer from './components/Footer/Footer';




function App() {
  return (
    <BrowserRouter>

      <Navbar />

      <Sidebar />

      <Routes>
        <Route path = "/login" element = {<Login />} />
        <Route path = "/" element = {<Home />} />
        <Route path = "/blog/:id" element = {<SingleBlog />} />
      </Routes>

      <Footer />
      
    </BrowserRouter>
  );
}

export default App;