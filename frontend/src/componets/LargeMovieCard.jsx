import React from 'react'

const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original";

export default function LargeMovieCard({movie}) {
  return <div>
        <section className='hover:scale-110 transition-all duration-150 ease-in m-3 pl-3'>
        <img src={IMAGE_BASE_URL + movie.backdrop_path}
        className=' rounded-lg  max-w-[360px] hover:border-[3px]
         border-gray-300 transition-all ease-in-out 
         duration-150 cursor-pointer hover:scale-110'/>
         <h2 className='w-[100px] md:w-[260px] text-white mt-2 align-middle'>{movie.title}</h2>
        </section>
    </div>
}
