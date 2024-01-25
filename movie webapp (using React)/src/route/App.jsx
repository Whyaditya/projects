import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Header from '../components/Header';
import Footer from '../components/Footer';
import MovieStoreProvider from '../store/Movie-store';
import { Outlet } from 'react-router-dom';

function App() {
 

  return (
    
    <div className='con'>

      <MovieStoreProvider>
      <Header/>

     
      <Outlet/>
      
    

      <Footer/>
      </MovieStoreProvider>


    </div>
    
  )
}

export default App
