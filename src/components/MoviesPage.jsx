import React from 'react'
import { useLoaderData } from 'react-router-dom'
import Card from './Card'
import API_KEY from '../API_KEY'


function MoviesPage() {
    const moviesData = useLoaderData()
    // image starting url 400 size
    const image_url = `https://image.tmdb.org/t/p/`
    const width_300 = 'w300'
    const width_400 = 'w400'
    
  return (
    <>
        <div className='flex flex-wrap justify-center gap-5 my-7 md:hidden'>
            {
            moviesData.map((movie) => (
                <Card 
                key={movie.id}
                title={movie.title} 
                vote_average={movie.vote_average} 
                backdrop_path={image_url+width_300+movie.backdrop_path}/>
                ))
            }
        </div>   

        <div className='hidden md:block'>
        <div className='flex flex-wrap justify-center gap-5 my-7 md:my-10'>
            {
            moviesData.map((movie) => (
                <Card 
                key={movie.id}
                title={movie.title} 
                vote_average={movie.vote_average} 
                backdrop_path={image_url+width_400+movie.backdrop_path}/>
                ))
            }
        </div>   
        </div>

    </>
  )
}

export default MoviesPage

export const moviesPageLoader = async () => {
    const response = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`)
    const data = await response.json()
    return data ? data.results : null
    
}