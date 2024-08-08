import React from 'react'
import { FaEarthAmericas } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { BsFillPatchCheckFill } from "react-icons/bs";
import { MdArrowOutward } from "react-icons/md";
import { FaLaptopCode } from "react-icons/fa";
import { IoMdTime } from "react-icons/io";
import { AiFillHeart } from "react-icons/ai";
import { CgBoy } from "react-icons/cg";

type data = {
   tittle : string,
   url : string,
   icon : React.ReactElement
}
const Infor = () => {

  const data : Array<data> = [
    {
      tittle : 'me.shirokodev.site',
      url : 'https://me.shirokodev.site/',
      icon : <FaEarthAmericas />
    },
    {
      tittle : 'sunaookamishirokodev',
      url : 'https://github.com/sunaookamishirokodev',
      icon : <FaGithub />
    },
    {
      tittle : 'sunaookamishirokodev',
      url : 'https://www.tiktok.com/@sunaookamishirokodev',
      icon : <FaTiktok />
    },
    {
      tittle : 'sunaookamishirokodev',
      url : 'https://www.youtube.com/channel/UC_xa6hLfN5O2--Un9N0EU3g',
      icon : <FaYoutube />
    },

  ]
  return (
    <div className='p-5 '>

      <div className=' mt-[70px]'>
        <span className='block font-[700] text-3xl text-[#fff]'>Sunaookami Shiroko</span>
        <span className='inline-block text-[13px] text-[#f8f8f8] mr-[7px]'>shiroko.dev</span>
        <span className='inline-block w-[5px] h-[5px] mb-[2px] rounded-full bg-[#fff] mr-[7px]'></span>
        <span className='inline-block text-[13px] text-[#f8f8f8] mr-1'>Code la cai deo gi</span>
      </div>  

      <div className='mt-5 px-4 rounded-lg bg-[#232528] overflow-y-auto h-[200px] scrollbar-thin'>
         <span className='text-xs pb-1 border-b-[1px] py-4 border-b-slate-100 mb-1 font-[700] uppercase block sticky top-0 left-0 z-10 bg-[#232528]'>Introduce about me</span>

         <div className='mt-4'>
           <div>
             <CgBoy className='fill-cyan-300 inline-block mr-1 w-[20px] h-[20px]' />
             <span className='inline-block mt-1 text-sm'>Shiroko - Admin @ElainaTeam</span>
           </div>
           
           <div>
             <FaLaptopCode className='fill-sky-600 inline-block mr-1 w-[20px] h-[20px]' />
             <span className='inline-block mt-1 text-sm'>Fullstack/bot discord dev</span>
           </div>
           <div>
              <IoMdTime className='fill-red-400 inline-block mr-1 w-[20px] h-[20px]' />
              <span className='inline-block mt-1 text-sm'>10+ month of experience</span>
           </div>
           <div>
              <AiFillHeart className='fill-red-500 inline-block mr-1 w-[20px] h-[20px]' />
              <span className='inline-block mt-1 text-sm'>Chole</span>
           </div>
           
         </div>

         <div className='mt-4'>
            <span className='font-[600] block text-sm text-[#ADB2B8] mb-[1px]'>Joined from</span>
            <span className='text-[13px]'>March 11th, 2024</span>
         </div>

         <div className='mt-4'>
            <span className='font-[600] block text-sm text-[#ADB2B8] mb-[1px]'>Connection</span>
            <div className='flex items-center justify-between flex-wrap'>
               {data.map((item,id) => (
                 <div className='px-[9px] mt-3 py-[12px] border-[1px] border-zinc-500 rounded-md grid grid-cols-[1fr_10px] grid-rows-1 w-[49%] ' key={id}>

                   <div className='flex items-center justify-start'>
                       <span className='inline-block mr-1 col-start-1 col-end-2'>{item.icon}</span>
                       <span className='font-[650] text-[#fff] text-sm inline-block mr-1 col-start-2 col-end-3'>{item.tittle}</span>
                       <span className='inline-block'> <BsFillPatchCheckFill/> </span>
                   </div>
                   <span className='block flex items-center justify-center'> <a href={item.url}><MdArrowOutward className='hover:text-[#fff] text-slate-300'/></a>  </span>

                 </div>
               ))}
            </div>
         </div>

      </div>

    </div>
  )
}

export default Infor