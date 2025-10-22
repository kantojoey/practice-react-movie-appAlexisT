import './App.css'
import MovieSelector from './components/MovieSelector'

function App() {

const movieTitles = {comedy: ["1", "2", "3"], action: ["4", "5", "6"]}

  return (
    <>
      <div>
        <MovieSelector movieTitles = {movieTitles}/>
      </div>
    </>
  )
}

export default App
