export default function DropdownMenu({ selectedGenre, setSelectedGenre }) {
    const handleChange = (event) => {
        setSelectedGenre(event.target.value);
    };

    return (
        <div>
            <select value={selectedGenre} onChange={handleChange}>
                <option value="" disabled>Select Category</option>
                <option value="comedy">Comedy</option>
                <option value="action">Action</option>
            </select>
        </div>
    );
}