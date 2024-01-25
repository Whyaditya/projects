import { createContext, useEffect, useReducer, useState} from "react";
import { redirect, useNavigate } from "react-router-dom";


export const MovieStore = createContext({
    movieList : [],
    dataFetched : true,
    tvList : [],
    carList: [],
    peopleList:[],
    searchList:[],
    handleSearch:()=>{}
})


const movieListReducer = (state,action)=>{
    let newState = state;
    if(action.type === 'ADD_INIT'){
        newState = action.payload;
    }
    return newState;
}



const MovieStoreProvider = ({children})=>{

   let [movieList,dispatchMovieList] = useReducer(movieListReducer,[]);
   let [tvList,setTvList] = useState([]);
   let [carList,setCarList] = useState([]);
   let [peopleList,setPeopleList] = useState([]);
   let [searchList,setSearchList] = useState([]);

   const [dataFetched, setDataFetched] = useState(true);


   const addInitialMovie = (data)=>{
        dispatchMovieList({
            type: 'ADD_INIT',
            payload: data
        })
   }



   const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0OGJhMTg3NzkyOTViMjRmZmNlZjk5MTBhMDAyMTU1ZCIsInN1YiI6IjY1NTE1OGVlZWE4NGM3MTA5MjI1Mjg4MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ETuLDtIAzzzar9IyjxFs9WqmRA3So8E0zR45SXbqksw'
    }
    };
   const url = 'https://api.themoviedb.org/3';
   const pop = "/movie/popular?language=en-US&page=1";
   const pop_tv = "/tv/popular?language=en-US&page=1";
   const carousel = "/movie/upcoming?language=en-US&page=1";
   const people = "/person/popular?language=en-US&page=1"


   useEffect(()=>{
    apiDataMovie()
    apiDataTv()
    apiDatacar()
    apiDataPeople()
   },[])


   const apiDataMovie = ()=>{
    setDataFetched(true);
    fetch(url+`${pop}`,options)
    .then(res=>res.json())
    .then((data)=>{
        addInitialMovie(data.results)
        // console.log(data.results)
    })
    setDataFetched(false)
   }

   const apiDataTv = ()=>{
    setDataFetched(true);
    fetch(url+`${pop_tv}`,options)
    .then(res=>res.json())
    .then((data)=>{
        setTvList(data.results)
        // console.log(data.results)
    })
    setDataFetched(false)
   }

   const apiDatacar = () => {
    setDataFetched(true);
    fetch(url + `${carousel}`, options)
        .then(res => res.json())
        .then((data) => {
            // Get the first three items from the results array
            const firstThreeItems = data.results.slice(0, 3);
            setCarList(firstThreeItems);
        })
        .finally(() => {
            setDataFetched(false);
        });
    };

    const apiDataPeople = ()=>{
        setDataFetched(true);
        fetch(url+`${people}`,options)
        .then(res=>res.json())
        .then((data)=>{
            setPeopleList(data.results)
            // console.log(data.results)
        })
        setDataFetched(false)
       }

    //    https://api.themoviedb.org/3/search/movie?query=batman&include_adult=false&language=en-US&page=1

    const navigate = useNavigate();
       
    const handleSearch = (event)=>{
        if(event.key === "Enter"){
            setDataFetched(true);
            navigate('/search');
            
            fetch(url+`/search/movie?query=${event.target.value}`,options)
            .then(res=>res.json())
            .then((data)=>{
                setSearchList(data.results)
                console.log(data.results)
            })
            setDataFetched(false)


        }
    }   



    return(
        <MovieStore.Provider value={{movieList,dataFetched,tvList,carList,peopleList,searchList,handleSearch}}>
            {children}
        </MovieStore.Provider>
    );
}

export default MovieStoreProvider;