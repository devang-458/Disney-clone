import React, { useEffect, useRef, useState } from "react";
import GlobelApi from "../services/GlobelApi";
import MovieCard from "./MovieCard";
import { HiMiniChevronRight ,HiMiniChevronLeft } from "react-icons/hi2";
import LargeMovieCard from "./LargeMovieCard";

function MovieList({genereId,index_}){
    
    const [movieList, setMovieList] = useState([])
    const elementRef = useRef(null)
    
    useEffect(()=>{
        getMoviebyGenreId();
    },[])

    const getMoviebyGenreId  = () => {
        GlobelApi.getMovieByGenreId(genereId).then(res => (
            setMovieList(res.data.results)
            ))
    }

    const slideRight=(element)=>{
        element.scrollLeft+=500;
    }
    const slideLeft=(element)=>{
        element.scrollLeft-=500;
    }

    return <div className="relative">
        <HiMiniChevronLeft onClick={()=>{
            slideLeft(elementRef.current)
        }} className={`text-[50px] text-white p-2 z-10 cursor-pointer hidden md:block absolute mt-[130px] ${index_%3==0?'mt-[130px]':""}`}
        />
        <div ref={elementRef} className="flex overflow-x-auto scroll-smooth pt-5 pb-5 px-3 gap-8 scrollbar-hide">
        {movieList.map((item,index)=>(
           <>
           {index_%3==0?<LargeMovieCard movie={item}/> : <MovieCard  movie={item} />}
           </>
        ))}
        </div> 
        <HiMiniChevronRight className="text-[50px] text-white p-2 z-10 cursor-pointer right-0 top-0 hidden md:block absolute mt-[130px]" onClick={()=>{
            slideRight(elementRef.current)
        }}/>

    </div>
}

export default MovieList
