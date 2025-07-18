import { useState, useEffect } from "react";
import Search from "./components/Search";

const API_BASE_URL = "https://api.themoviedb.org/3";
const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

const API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${API_KEY}`,
  },
};

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchMovies = async () => {
    setLoading(true);
    setErrorMessage("");
    try {
      const endpoint = `${API_BASE_URL}/discover/movie?sort_by=popularity.desc`;
      const response = await fetch(endpoint, API_OPTIONS);

      if (!response.ok) {
        setErrorMessage("Failed to fetch movies. Please try again later.");
        return;
      }
      const data = await response.json();
      if (data.Response === "False") {
        setErrorMessage(
          data.Error || "An error occurred while fetching movies."
        );
        setMovies([]);
        return;
      }

      setMovies(data.results || []);
    } catch (error) {
      console.error("Error fetching movies:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <main>
      <div className="pattern"></div>
      <div className="wrapper">
        <header>
          <img src="/hero.png" alt="Hero Banner" />
          <h1>
            Find Your <span className="text-gradient">Next</span> Movie
          </h1>
          <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        </header>

        <section className="all-movies">
          <h2 className="mt-40">All Movies</h2>
          {loading ? (
            <p className="text-white">Loading...</p>
          ) : errorMessage ? (
            <p className="text-red-500">{errorMessage}</p>
          ) : (
            <ul className="movie-list">
              {movies.map((movie) => (
                <li key={movie.id} className="movie-item">
                  <h3 className="text-white">{movie.title}</h3>
                  <p className="text-gray-400">{movie.overview}</p>
                </li>
              ))}
            </ul>
          )}
        </section>
      </div>
    </main>
  );
};
export default App;
