const People = ({name,overview,profile_path,popularity}) => {
    return (
        <div class="card mb-1 me-5 ms-5" style={{maxWidth: "540px;"}}>
            <div class="row g-0">
                <div class="col-md-3 mt-2">
                    <img src={`https://image.tmdb.org/t/p/w500${profile_path}`} class="img-fluid rounded" alt="..."/>
                </div>
                <div class="col-md-10">
                    <div class="card-body">
                        <h5 class="card-title">{name}</h5>
                        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        <p class="card-text"><small class="text-body-secondary">popularity : {Math.round(popularity)}</small></p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default People;