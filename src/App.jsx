import { useEffect, useState } from 'react'
import './App.css'
import Navbar from './Navbar'
import MovieCard from './MovieCard'
import image1 from './assets/download.jpg'
import image2 from './assets/alice.jpg'
import image3 from './assets/tom and jerry.jpg'
import { use } from 'react'

function App() {
  const [Movies, setMovies] = useState([])

  const [name, setName] = useState("");
  
  const baseUrl = "https://www.omdbapi.com/"
  const apiKey = "89273e39"
  const handleChange = (e) => {
    setName(e.target.value);
  }

  useEffect(() => {
    fetch(`${baseUrl}?s=${name}&apikey=${apiKey}`)
    .then(res => res.json())
    .then(data => setMovies(data.Search));

  }, [name]);
  
  return (
    <>
    <Navbar/>
    <div>
      <input type="text" value={name} onChange={handleChange} id="input" placeholder='Search for Movies'/>
      <h1 id='name'>{name}</h1>
    </div>
    <div className="container">
      {Movies?.map((movie) =>{
        return(
          <MovieCard
          key={movie.imdbID}
          imageUrl={movie.Poster}
          MovieTitle={movie.Title}
          MovieYear={movie.Year}
          />
        )
      })}
    </div>
    </>
  )
}

export default App
