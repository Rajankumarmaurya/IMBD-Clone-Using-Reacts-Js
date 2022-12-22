import React from 'react'
import { Route, Routes } from 'react-router-dom';
import "./App.css"

import Header from './component/header/Header';
import MovieList from './component/movielist/MovieList';
import Home from './pages/home/Home';

const App = () => {
  return (
    <div className='App'>
      <Header/>
      
      <Routes>
        <Route index element={<Home/>}/>
        <Route path='movies/:type' element={<MovieList/>}/>
        <Route path='/*' element={ <h1 >No data Found</h1>}/>

      </Routes>
    </div>
  )
}

export default App;
