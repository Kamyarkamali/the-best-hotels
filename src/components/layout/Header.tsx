import React, { useEffect, useState } from 'react'


// icons
import {AiOutlineClose} from "react-icons/ai";
import {AiOutlineMenu} from "react-icons/ai";

import {BsHouseDoor} from "react-icons/bs"
import {BsHeart} from "react-icons/bs"
import {BsPersonPlus} from "react-icons/bs"
import {BsQuestion} from "react-icons/bs"
import {BiSupport} from "react-icons/bi"
import {BiCheckSquare} from "react-icons/bi"
import {BiGift} from "react-icons/bi"

import {BiLogoWhatsapp} from "react-icons/bi"
import {BiLogoTelegram} from "react-icons/bi"
import {BiLogoInstagram} from "react-icons/bi"

import image1 from "../images/header.jpg";

function Header() {

  const [open,setOpen]=useState<boolean>(false);


  useEffect(()=>{
    function handelOpenClick(event:MouseEvent){
      if(open){
        setOpen(false)
      }
    }
    console.log(open)

    document.addEventListener("click",handelOpenClick)

    return ()=>{
      document.removeEventListener("click",handelOpenClick)
    }
  },[open])

  return (
    <div className='max-w-[1600px] mx-auto'>
      <div>
        <img src={image1} alt='images' className='md:w-full relative md:h-[600px] h-[400px] w-[500px] object-cover'/>

        <div className='bg-black absolute top-0 hidden md:block w-full left-0 h-[600px] opacity-20'></div>

        <div className='absolute top-[2rem] right-[4rem] text-white hidden md:block'>
          <ul className='flex justify-start gap-[4rem] items-center'>
            <li className='text-xl bg-white text-black p-2 rounded-md'>ورود / ثبت نام</li>
            <li className='text-xl'>ویلاها</li>
            <li className='text-xl'>علاقه مندی ها</li>
          </ul>
        </div>

        {/* input */}

        <div className='absolute md:right-[40rem] md:gap-6 md:top-[20rem] right-[4rem] gap-3 top-[10rem] flex flex-col items-center'>
          <h1 className='md:text-3xl text-xl text-white'>اجراه ویلا در شمال برای سراسر ایران</h1>
          <input type="text"  placeholder='به کجا میروی؟' className='border-2 p-1 outline-none w-[330px] rounded-lg'/>
        </div>

        {/* input */}

      {/* hamburger menu */}
        <div className='absolute md:hidden top-0 p-2 right-[-8px]'>
          {!open ? (
            <AiOutlineMenu onClick={(e)=>{e.stopPropagation(); setOpen(!open)}} size={30} color="white" className="cursor-pointer"/>
          ) : (
          <AiOutlineClose onClick={(e)=>{e.stopPropagation(); setOpen(!open)}} size={30} color="white" className="cursor-pointer"/>
          )}

            {/* hamburger list */}
            <div className={open ? 'bg-white z-10 w-[300px] duration-300 ease-in h-screen flex rounded-lg p-3 absolute right-2' : 'bg-white z-10 duration-300 ease-in w-[300px] h-screen flex rounded-lg p-3 absolute right-[-1000%]'}>
              <ul>
                <li className='flex items-center text-gray-500 font-bold gap-2 mt-7'><BsHouseDoor size={24}/>صفحه اصلی</li>
                <li className='flex items-center text-gray-500 font-bold gap-2 mt-7'><BsHeart size={24}/>علاقه مندی ها</li>
                <li className='flex items-center text-gray-500 font-bold gap-2 mt-7'><BsPersonPlus size={24}/>میزبان شو</li>
                <li className='flex items-center text-gray-500 font-bold gap-2 mt-7'><BsQuestion size={24}/> سوالات متداول</li>
                <li className='flex items-center text-gray-500 font-bold gap-2 mt-7'><BiSupport size={24}/>پشتیبانی</li>
                <li className='flex items-center text-gray-500 font-bold gap-2 mt-7'><BiCheckSquare size={24}/>ضمانت تحویل</li>
                <li className='flex items-center text-gray-500 font-bold gap-2 mt-7'><BiGift size={24}/>دعوت از دوستان</li>
              </ul>
              
              <div className='absolute top-[28rem] flex right-[6rem] gap-4'>
                <BiLogoWhatsapp size={23}/>
                <BiLogoTelegram size={23}/>
                <BiLogoInstagram size={23}/>
              </div>
            </div>

            {/* hamburger list */}


        </div>
      {/* hamburger menu */}

      </div>
    </div>
  )
}

export default Header