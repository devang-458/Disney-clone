import React from 'react'
import logo from './../assets/images/logo.png'
import {HiHome,HiMagnifyingGlass
,HiStar,HiPlayCircle,HiTv} from "react-icons/hi2";
import {HiPlus,HiDotsVertical} from "react-icons/hi";
import { Headeritem } from './Headeritem';


export default function Header() {
    const menu = [
        {
            name: 'HOME',
            icon: HiHome
        },{
            name:'SEARCH',
            icon: HiMagnifyingGlass
        },
        {
            name:"WATCH LIST",
            icon:HiPlus
        },
        {
            name:"ORIGINAL",
            icon: HiStar
        },
        {
            name:"MOVIES",
            icon: HiPlayCircle
        },
        {
            name:"SERIES",
            icon: HiTv
        }
    ]

  return (
    <div className="flex gap-8 items-center">
        <div>
        <img src={logo} className='w-[80px] md:w-[115px] object-cover'/>
        {menu.map((item)=>(
        <Headeritem  name={item.name} Icon={item.icon}/>))}
        </div>
        <img src=''/>
    </div>
  )
}
