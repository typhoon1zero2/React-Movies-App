export default function MovieDisplay({movie}){
    const loaded = () => {
        return(
            
            <div className="text-center">
            <h2 className="movie-title">{movie.Title}</h2>
            <h4 className="genre-title">{movie.Genre}</h4>
            <div className="text-center">
            <img src={movie.Poster} className="rounded" alt={movie.Title}/>
            </div>
            <h2 className="year">{movie.Year}</h2>
            </div>
        )
    }

    const loading = () => {
        return <h1 className="cards">No Movie to Display</h1>
    }

    return movie && movie.Title ? loaded() : loading();
} 