import { useState } from "react";
import DropdownMenu from "./DropdownMenu";
import MovieList from "./MovieList";

export default function MovieSelector({ movieTitles }) {
    const [selectedGenre, setSelectedGenre] = useState("");
    const [movies, setMovies] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const handleFetchMovies = () => {
        if (!selectedGenre) return;

        setIsLoading(true);

        setTimeout(() => {
            setMovies(movieTitles[selectedGenre]);
            setIsLoading(false);
        }, 1000);
    };

    return (
        <div>
            <DropdownMenu selectedGenre={selectedGenre} setSelectedGenre={setSelectedGenre} />
            <button onClick={handleFetchMovies}>Fetch Movies</button>
            {isLoading && <p>Loading movies...</p>}
            <MovieList movies={movies} />
        </div>
    );
}