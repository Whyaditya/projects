const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0OGJhMTg3NzkyOTViMjRmZmNlZjk5MTBhMDAyMTU1ZCIsInN1YiI6IjY1NTE1OGVlZWE4NGM3MTA5MjI1Mjg4MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ETuLDtIAzzzar9IyjxFs9WqmRA3So8E0zR45SXbqksw'
    }
  };
  
const url = 'https://api.themoviedb.org/3';

const now_playing = document.querySelector('.np');
const  popular  = document.querySelector('.pop');
const  hero  = document.querySelector('.hero');
const form = document.getElementById("search");
const inputse = document.getElementById("inp");


const img_url = "https://image.tmdb.org/t/p/w500";

async function Home(search,a){
    const np = "/movie/now_playing?language=en-US&page=1"
    const pop = "/movie/popular?language=en-US&page=1"
    const upcomhero = '/movie/upcoming?language=en-US&page=1';
    const searchurl = '/search/movie?'

    if (a == 'true') {
        const responses = await fetch(url + `${searchurl}` +  search , options );
        var datas = await responses.json()
        console.log("hi");
        
    }else{

    const response = await fetch(url + `${np}`, options);
    var data = await response.json()
    
    const response2 = await fetch(url + `${pop}`, options); 
    var popdata = await response2.json()

    const response3 = await fetch(url + `${upcomhero}`, options); 
    var updata = await response3.json()

    // console.log(data);

    if(response.status == 404){
        console.log("error")
    }
    else{
       showmovies(data.results,popdata.results,updata.results);

    }

    }
}

form.addEventListener('submit',(e)=>{
    e.preventDefault();

    const searchterm = inputse.value;
    console.log(searchterm);
    const a = 'true';

    Home(searchterm,a);
    
})


function showmovies(da,popd,up){

    // console.log(da);
    // main.innerHTML = "";
    // da.forEach(movie => {
    //     const {title,poster_path,vote_average,overview}= movie;
    //     const m = document.createElement('div');
    //     m.className = 'card';
    //     m.innerHTML = `
    //     <img src="${img_url+poster_path}" alt="${title}">

    //     <div class="movie-info">
    //         <h3>${title}</h3>
    //         <span class="${getcolor(vote_average)}">${vote_average}</span>
    //     </div>
    //     <div class="overview">
    //         <h3>overview</h3>
    //         ${overview}
    //     </div>`

    //     main.appendChild(m);
    // });

    for (let index = 0; index < 8; index++) {
        const title = da[index].title;
        const poster_path = da[index].poster_path;
        const vote_average = da[index].vote_average;
        const overview = da[index].overview;
        const m = document.createElement('div');
        m.className = 'card';
        m.innerHTML = `
        <img src="${img_url+poster_path}" alt="${title}">

        <div class="movie-info">
            <h3>${title}</h3>
            <span class="${getcolor(vote_average)}">${vote_average}</span>
        </div>
        <div class="overview">
            <h3>overview</h3>
            ${overview}
        </div>`

        now_playing.appendChild(m);
        
    }



    for (let index = 0; index < 8; index++) {
        const title = popd[index].title;
        const poster_path = popd[index].poster_path;
        const vote_average = popd[index].vote_average;
        const overview = popd[index].overview;
        // popular.innerHTML = "";
        const m = document.createElement('div');
        m.className = 'card';
        m.innerHTML = `
        <img src="${img_url+poster_path}" alt="${title}">

        <div class="movie-info">
            <h3>${title}</h3>
            <span class="${getcolor(vote_average)}">${vote_average}</span>
        </div>
        <div class="overview">
            <h3>overview</h3>
            ${overview}
        </div>`

        popular.appendChild(m);
        
    }


    for (let index = 0; index < 3; index++) {
        
        const poster_path = up[index].poster_path;
        const m = document.createElement('div');
        m.className = 'mySlides fade';
        m.innerHTML = `
        
        <img src="${img_url+poster_path}">
        
        `

        hero.appendChild(m);
        
    }









}

function getcolor(vote){
    if(vote>=8){
        return 'green'
    }else if( vote >= 5){
        return 'orange'
    }else{
        return 'red';
    }
}

Home();




let slideIndex = 0;
showSlides();

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
  }
  
  // Thumbnail image controls
  function currentSlide(n) {
    showSlides(slideIndex = n);
  }

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 80000); // Change image every 2 seconds
}