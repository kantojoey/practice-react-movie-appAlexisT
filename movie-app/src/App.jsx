import { useState } from 'react'
import './App.css'
import MovieSelector from './components/MovieSelector'

function App() {

const moviesTitles = [{comedy: ["1", "2", "3"]}, {action: ["4", "5", "6"]}]

  return (
    <>
      <div>
        <MovieSelector moviesTitles = {movieTitles}/>
      </div>
    </>
  )
}

export default App
