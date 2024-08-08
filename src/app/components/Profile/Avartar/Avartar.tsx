'use client'
import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import { RiMoonFill } from "react-icons/ri"
import { FaCircle } from "react-icons/fa6"
import { FaCircleDot } from "react-icons/fa6"
import { FaCircleMinus } from "react-icons/fa6";

const Avartar = () => {
  const [state, setState] = useState<string>('sleep')
  const [element, setElement] = useState<React.ReactElement>()

  useEffect( () => {
    if (state === 'online') {
      setElement(<FaCircle className='absolute -bottom-9 left-[97px] fill-green-600 w-[35px] h-[35px] rounded-full p-[7px] bg-[#313338]' />)
    } else if (state === 'offline') {
      setElement(<FaCircleDot className='absolute -bottom-9 left-[97px] fill-slate-500 w-[35px] h-[35px] rounded-full p-[7px] bg-[#313338]'  />)
    } else if (state === 'sleep') {
      setElement(<RiMoonFill className='absolute -bottom-9 left-[97px] fill-yellow-400 w-[35px] h-[35px] rounded-full p-[7px] bg-[#313338]' />)
    } else if (state === 'focus') {
      setElement(<FaCircleMinus className='absolute -bottom-9 left-[97px] fill-red-500 w-[35px] h-[35px] rounded-full p-[7px] bg-[#313338]'  />)
    }
  },[state])
 

  return (
    <div className='w-[650px] h-[210px] absolute'>
       <Image src='/avartar.png' width={200} alt='wait..' height={200} className='absolute -bottom-10 left-2 mr-3 object-cover rounded-full border-[7px] border-[#313338] w-[140px] h-[140px]' />
       {element}
       <div className='w-[500px] h-[100px] absolute bottom-0 left-0'>
          <div className='rounded-full w-[15px] h-[15px] bg-[#313338] absolute bottom-7 left-[160px]'></div>
          <div className='rounded-full w-[20px] h-[20px] bg-[#313338] absolute bottom-[4.5px] left-[185px]'></div> 
          <div className='rounded-lg bg-[#313338] px-[10px] py-[12px] absolute -bottom-8 left-[180px]'>I Love You</div>
       </div>
    </div>
  )
}

export default Avartar