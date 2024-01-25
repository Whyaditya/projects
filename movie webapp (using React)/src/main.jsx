import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './route/App'
import{RouterProvider,createBrowserRouter} from 'react-router-dom'
import MovieDetail, { tvChange, movieChange } from './components/Details'
import Carousel from './components/Carousel';
import Divider from './components/Divider';
import MovieBox from './components/MovieBox';
import Trending, { fullLoad } from './components/TrendingMovie';
import TrendingShows from './components/TrendingShows';
import Hero from './components/Hero';
import PeopleList from './components/PeopleList';
import Login from './components/Login'
import SearchPage from './components/SearchPage'


const router = createBrowserRouter([
  {
    path:'/',
    element:<App/>,
    children:[
      {path:'/',element: (<>
        <Carousel />
        <Divider />
        <Trending />
        <Divider />
        <TrendingShows />
        <Divider />
        <PeopleList />
        <Divider />
        <Hero />
          </>)},
      {path:'/moviedetail/:id',element: <MovieDetail/>, loader:movieChange },
      {path:'/seriesdetail/:id',element: <MovieDetail/>, loader:tvChange },
      {path:'/movies',element: <Trending />, loader:fullLoad },
      {path:'/series',element: <TrendingShows />, },
      {path:'/login',element: <Login/>, },
      {path:'/signup',element: <Login/>, },
      {path:'/search',element: <SearchPage/>, },


    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
