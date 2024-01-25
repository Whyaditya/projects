const option = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0OGJhMTg3NzkyOTViMjRmZmNlZjk5MTBhMDAyMTU1ZCIsInN1YiI6IjY1NTE1OGVlZWE4NGM3MTA5MjI1Mjg4MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ETuLDtIAzzzar9IyjxFs9WqmRA3So8E0zR45SXbqksw'
    }
  };
  
const urls = 'https://api.themoviedb.org/3';


// const img_url = "https://image.tmdb.org/t/p/w500";

async function Home(){
    

    const np = "/movie/299054/watch/providers?language=en-U"

    const response = await fetch(urls + `${np}`, option);
    var data = await response.json()
    
   
    
    // console.log(data);

    // if(response.status == 404){
    //     console.log("error")
    // }
    // else{
    //    showmovies(data.results,popdata.results,updata.results);

    // }
}

Home();
