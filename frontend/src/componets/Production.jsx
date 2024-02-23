import React from "react"

import disney from "./../assets/images/disney.png"
import marvel from "./../assets/images/marvel.png"
import nationalG from "./../assets/images/nationalG.png"
import pixar from "./../assets/images/pixar.png"
import starwar from "./../assets/images/starwar.png"

import disneyV from "./../assets/Videos/disney.mp4"
import marvelV from "./../assets/Videos/marvel.mp4"
import nationalGV from "./../assets/Videos/national-geographic.mp4"
import pixarV from "./../assets/Videos/pixar.mp4"
import starwarV from "./../assets/Videos/star-wars.mp4"


export function ProductionHouse () {
    const list = [
        {
            id:1,
            image:disney,
            video:disneyV
        },{
            id:2,
            image:pixar,
            video:pixarV
        },{
            id:3,
            image:marvel,
            video:marvelV
        },{
            id:4,
            image:starwar,
            video:starwarV
        },{
            id:5,
            image:nationalG,
            video:nationalGV
        }
    ]
    return <div>
        <div className="flex gap-2 md:gap-5 px-5 md:px-16">
            {list.map((item)=>(
                <div className="border-gray-600 border-[2px] rounded-lg hover:scale-110 transition-all 
                duration-300 ease-in-out cursor-pointer relative shadow-lg shadow-gray-600">
                    <img src={item.image} className="w-full z-[1] "/>
                    <video src={item.video} autoPlay loop playsInline muted className="absolute top-0 rounded-md z-0 opacity-0 hover:opacity-50"/>
                </div>

            ))}
        </div>
    </div>
}