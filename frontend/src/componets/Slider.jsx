import { useEffect, useRef, useState } from "react"
import GlobelApi from "../services/GlobelApi"
const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original";
import { HiMiniChevronRight ,HiMiniChevronLeft } from "react-icons/hi2";

export function Slider(){

    const [movieList , setMovieList] = useState([]);
    const elementRef = useRef();
    const screenWidth = window.innerWidth;
    
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

    const sliderLeft = (element) => {
        element.scrollLeft -= screenWidth;
    }
    
    const sliderRight = (element) => {
        element.scrollLeft += screenWidth;
    }
    
    return <div>
        <div >
        <HiMiniChevronLeft className="hidden md:block text-white text-[40px] absolute mx-8 mt-[155px] cursor-pointer " onClick={()=>sliderLeft(elementRef.current)}/>
        <HiMiniChevronRight className="hidden md:block text-white text-[40px] absolute mx-8 mt-[155px] cursor-pointer right-0" onClick={()=>sliderRight(elementRef.current)}/>
        </div>
        <div className="flex overflow-x-auto w-full px-16 py-4 scrollbar-hide scroll-smooth" ref={elementRef}>
        {movieList.map((item,index)=>(
            <img src={IMAGE_BASE_URL+ item.backdrop_path} className="min-w-full object-cover md:h-[310px] object-left-top mr-5 rounded-lg hover:border-[4px]
             border-gray-400 transition-all ease-in-out shadow-slate-900 shadow-2xl duration-200" 
              style={{ boxShadow: '0px 10px 20px rgba(0, 0, 0, 0.2)' }}/>
        ))}
    </div>
    </div>
}