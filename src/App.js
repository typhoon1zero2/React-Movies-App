import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
// WE IMPORT OUR COMPONENTS
import MovieDisplay from "./components/MovieDisplay";
import Form from "./components/Form";
import { AiOutlineGithub } from "react-icons/ai";

export default function App() {
  //variable with your apiKey
  const apiKey = "b4bbb296";

  //State to hold movie data
  const [movie, setMovie] = useState(null);

  //Function to getMovies
  const getMovie = async (searchTerm) => {
    try {
      // make fetch request and store response
      const response = await fetch(
        `https://www.omdbapi.com/?apikey=${apiKey}&t=${searchTerm}`
      );
      // Parse JSON response into a javascript object
      const data = await response.json();
      //set the Movie state to the movie
      setMovie(data);
    } catch (error) {
      console.error(error);
    }
  };

  // USE OUR COMPONENTS IN APPs RETURNED JSX
  // We pass the getMovie function as a prop called moviesearch
  return (
    <div className="container-fluid movie-app">
      <Form movieSearch={getMovie} />
      <MovieDisplay movie={movie} />
      <a className="icons" href="https://github.com/typhoon1zero2"><AiOutlineGithub /></a>
    </div>
    
  );
}
