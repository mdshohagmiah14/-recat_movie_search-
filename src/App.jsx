import { useState, useEffect } from "react";
import "./App.css";
import MovieDisplay from "./components/ MovieDisplay";
import Form from "./components/From";
import.meta.env.VITE_OMDB_API_KEY;
 function App() {
  console.log(import.meta.env.VITE_OMDB_API_KEY);
  const [movie, setMovie] = useState(null);

  const getMovie = async (searchTerm) => {
    try {
      const response = await fetch(
        `http://www.omdbapi.com/?apikey=${import.meta.env.VITE_OMDB_API_KEY}&t=${searchTerm}`
      );
      const data = await response.json();
      setMovie(data);
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    getMovie("Clueless");
  }, []);

  return (
    <div className="App">
      <Form moviesearch={getMovie} />
      <MovieDisplay movie={movie} />
    </div>
  );
}
export default App;