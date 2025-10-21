import { useState } from "react";
export default function SelectedGenre({ movieTitles }) {
    const [movieGenre, setMovieGenre] = useState('')
    const handleChange = event => {
        setMovieGenre(event.target.value)
    }
    return (
        <section>
            <div>
                <select id = "genre" className="select-genre" value={movieGenre} onChange={handleChange}>
                    <option value="comedy">Comedy</option>
                    <option value="action">Action</option>
                </select>

            </div>
        </section>
    );
};