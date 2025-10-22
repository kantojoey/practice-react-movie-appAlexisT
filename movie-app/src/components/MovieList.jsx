export default function MovieList({ movies }) {
  return (
    <ul>
      {movies.map((title, index) => (
        <li key={index}>{title}</li>
      ))}
    </ul>
  );
}