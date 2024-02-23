import { useEffect, useRef, useState } from "react"
import GlobelApi from "../services/GlobelApi"
const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original";
import { HiMiniChevronRight ,HiMiniChevronLeft } from "react-icons/hi2";

export function Slider(){

    const [movieList , setMovieList] = useState([])
    const elementRef = useRef
    
    useEffect(()=>{
        getTrendingVideos()
    },[])
    
    const getTrendingVideos = ()=>{
        GlobelApi.getTrendingVideos.then((response=>{
            const data = response.data.results 
            console.log(data)
            setMovieList(data)
        }))
    }

    const slider

    return <div>
        <div >
        <HiMiniChevronLeft className="hidden md:block text-white text-[40px] absolute mx-8 mt-[155px] cursor-pointer"/>
        <HiMiniChevronRight className="hidden md:block text-white text-[40px] absolute mx-8 mt-[155px] cursor-pointer right-0" />
        </div>
        <div className="flex overflow-x-auto w-full px-16 py-4 scrollbar-hide" ref={elementRef}>
        {movieList.map((item,index)=>(
            <img src={IMAGE_BASE_URL+ item.backdrop_path} className="min-w-full object-cover md:h-[310px] object-left-top mr-10 rounded-lg"/>
        ))}
    </div>
    </div>
}