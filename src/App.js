import React from 'react';
import Home from './Components/home';
import {Route, Routes, BrowserRouter } from 'react-router-dom';
import Login from './Components/login/login'
import Prices from './Components/prices/prices';
import Blogpage from './Components/blog/blogpage';
import BlogArticle from './Components/blog/Bloglist/blogarticle';


function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />}  /> 
        <Route path='/login' element={<Login />} />
        <Route path='/prices' element={<Prices />} />
        <Route path='/blogpage' element={<Blogpage />} />
        <Route path='/blogarticle' element={<BlogArticle/>} />
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
