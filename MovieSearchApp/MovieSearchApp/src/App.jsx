import { useEffect, useState } from 'react'
import Result from './components/Result'
import axios from 'axios'

function App() {
  const APIURL = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";
  const SEARCHAPI = "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";
const [movies,setMovies]=useState([1])
const[search,setSearch]=useState("")

const getAllMovies =()=>{
  axios.get(APIURL)
  .then(
    (response)=>{
        setMovies(response.data.results)
    }

  )
  .catch(
    (error)=>{
      console.log(error)
    }
    
  )
}

useEffect(()=>{
  setMovies([])
 if(search===""){
   getAllMovies()
 }else{
  getSearchedMovies()
 }

},[search])

const changeTheSearch = (e)=>{
  setSearch(e.target.value)
}

const getSearchedMovies = ()=>{
  axios.get(SEARCHAPI+search)
.then((response)=>{
setMovies(response.data.results)
}).catch((error)=>{
console.log(error)
})


}
  return (
    
    <div className='max-w-[1240px] shadow-xl mx-auto min-h-[400px] p-3 '>
    <input value={search} onChange={changeTheSearch} type="search" className='w-full border border-black rounded text-slate-700 p-4' />
    {
      movies.length === 0 ? <div className='text-xl font-bold  text-center mt-5'>Loading...</div>:<Result movies={movies}/>
    }
    
   </div>
   
  )
}

export default App
 