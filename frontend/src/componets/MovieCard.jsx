import React from 'react'

const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original";

export default function MovieCard({movie}) {
  return <div>
        <img src={IMAGE_BASE_URL + movie.poster_path}
        className=' rounded-lg  max-w-[100px] md:max-w-60 hover:border-[3px]
         border-gray-300 transition-all ease-in-out 
         duration-150 cursor-pointer hover:scale-110'/>
    </div>
}


