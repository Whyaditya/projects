import { useContext, useState } from "react";
import MovieBox from "./MovieBox";
import { MovieStore } from "../store/Movie-store";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import LoadingSpinner from "./LoadingSpinner";
import { Link } from "react-router-dom";

let load = false;

const Trending = () => {

    let { movieList, dataFetched } = useContext(MovieStore);

    let onlyEight;

    if(load === false){
        onlyEight = movieList.slice(0,8);
    }else{
        onlyEight = movieList;
    }

    

    return (
        <div class="container px-4 py-5 " id="custom-cards">
            <h2 class="pb-2 border-bottom trending">Trending movie</h2>

            <div class="row row-cols-1 row-cols-lg-4 align-items-stretch g-4 py-5">


                {dataFetched && onlyEight.map(data => (<LoadingSpinner />))}


                {!dataFetched && onlyEight.map(data => (<MovieBox key={data.id} m_title={data.title} m_image={data.backdrop_path
                } m_rating={data.vote_average} id={data.id} />))}

                {/* {console.log(movieList)} */}

            </div>
            <Link to="/movies" class="link-dark link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover">show more</Link>

        </div>
    );
}


export const fullLoad =()=>{
    return load = true;
}


export default Trending;