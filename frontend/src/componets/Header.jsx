import React, { useState } from 'react'
import logo from './../assets/images/logo.png'
import {HiHome,HiMagnifyingGlass
,HiStar,HiPlayCircle,HiTv} from "react-icons/hi2";
import {HiPlus,HiDotsVertical} from "react-icons/hi";
import { Headeritem } from './Headeritem';


export default function Header() {
    const [toggle, setToggle] = useState(false)
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
    <div className="flex gap-8 items-center p-5 justify-between">
        <div className='flex gap-8 items-center '>
        <img src={logo} className='w-[80px] md:w-[115px] object-cover'/>
        
        <div className='hidden md:flex gap-8'>
        {menu.map((item)=>(
        <Headeritem  name={item.name} Icon={item.icon}/>))}
        </div>

        <div className='md:hidden flex gap-5'>
        {menu.map((item,index)=>index<3&&(
        <Headeritem  name={""} Icon={item.icon}/>))}
        </div>
        
        <div className='md:hidden' onClick={()=>setToggle(!toggle)}>
        <Headeritem  name={""} Icon={HiDotsVertical}/>
        {toggle?<div className='absolute mt-3 bg-[#151515] border-[1px] p-3
        border-gray-700 px-5 py-4 rounded-lg'>
            {menu.map((item, index)=>index>2&&(
                <Headeritem name={item.name} Icon={item.icon}/>
            ))}
            </div>:null}
        </div>

        </div>
        <img src='https://icon-library.com/images/avatar-icon-images/avatar-icon-images-4.jpg'
        className='w-[40px] rounded-full'/>
    </div>
  )
}
