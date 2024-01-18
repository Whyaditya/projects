import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import Loading from "./LoadingMovieDetails";

let tv = false;

const MovieDetail = () => {
  let movieDe = useLoaderData();
  let [movie, setMovie] = useState([]);
  let [dataLoaded, setDataLoaded] = useState(true);
  let { id } = useParams();

  let url; // Declare url outside the if-else block

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0OGJhMTg3NzkyOTViMjRmZmNlZjk5MTBhMDAyMTU1ZCIsInN1YiI6IjY1NTE1OGVlZWE4NGM3MTA5MjI1Mjg4MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ETuLDtIAzzzar9IyjxFs9WqmRA3So8E0zR45SXbqksw",
    },
  };

  if (tv == true) {
    url = "https://api.themoviedb.org/3/tv/";
  } else {
    url = "https://api.themoviedb.org/3/movie/";
  }

  useEffect(() => {
    apiDataMovie();
  }, []);

  const apiDataMovie = () => {
    fetch(url + `${id}?language=en-US`, options)
      .then((res) => res.json())
      .then((data) => {
        setMovie(data);
        setDataLoaded(false);
      });
  };

  return (
    <>
      {dataLoaded && <Loading></Loading>}

      {!dataLoaded && (
        <div class="container my-5 ">
          <div
            class="p-5 text-center bg-dark rounded-3 detail"
            style={{
              backgroundImage: `url(https://image.tmdb.org/t/p/w500${movie.poster_path})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "100% 100%",
              backgroundBlendMode: "overlay",
            }}
          >
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              className="rounded"
              alt=""
              style={{ height: "200px" }}
            />
            <h1 class="text-primary">{movie.title}</h1>
            <p class="col-lg-8 mx-auto fs-5  text-light">{movie.overview}</p>

            <div class="d-inline-flex gap-2 mb-5 mt-5">
              <button
                class="d-inline-flex align-items-center btn btn-primary btn-lg px-4 rounded-pill"
                type="button"
              >
                watch
              </button>
              <img src="/image/netflix.png" alt="" style={{ height: "50px" }} />
              <img src="/image/youtube.png" alt="" style={{ height: "50px" }} />
              <img src="/image/social.png" alt="" style={{ height: "50px" }} />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export const tvChange = () => {
  return (tv = true);
};
export const movieChange = () => {
  return (tv = false);
};

export default MovieDetail;