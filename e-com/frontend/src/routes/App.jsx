import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Outlet,Navigate } from 'react-router-dom';
import Header from '../components/Header'
import Footer from '../components/Footer';
import EcomProvider from '../store/Ecom-store';


function App() {



  return (
    
    <EcomProvider>
    <Header/>
    <div className='container-fluid'>
      <div className="row">
        <div className="col-12">




      <Outlet/>
      


      
      <Footer/>
        </div>
      </div>
    </div>
    </EcomProvider>
    
  )
}

export default App
