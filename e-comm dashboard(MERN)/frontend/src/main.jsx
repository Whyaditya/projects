import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './routes/App'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Products from './components/Products'
import LogOut from './components/LogOut'
import SignUp, { signUp } from './components/SignUp'
import LogIn from './components/LogIn'
import Protected from './routes/Protected'
import AddProduct from './components/AddProduct'
import ProductList from './components/ProductList'
import UpdateProducts from './components/UpdateProducts'
import Profile from './components/Profile'

const router = createBrowserRouter([

  {
    path: '/', element: <App />, children: [{
      path: '/home', element: <Protected/>, children: [
        { path: '/home', element: <Products /> },
        { path: '/home/profile', element: <Profile/> },
        { path: '/home/products', element: <ProductList/> },
        { path: '/home/addproducts', element: <AddProduct/> },
        { path: '/home/updateproducts/:id', element: <UpdateProducts/> },
        { path: '/home/orders', element: <Products /> },
        { path: "/home/log-out", element: <LogOut />, },
      ]
    },
    { path: "/sign-up", element: <SignUp />, action: signUp, },
    { path: "/log-in", element: <LogIn /> },]
  }

])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
