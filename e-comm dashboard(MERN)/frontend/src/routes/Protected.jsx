import { Outlet,Navigate } from 'react-router-dom';


const Protected = ()=>{
  const auth = localStorage.getItem('token');

    return(
        <>
      {auth?<Outlet/>:<Navigate to='/log-in'/>}
        </>

    );
}

export default Protected;