import React from 'react'
import { IoIosArrowDropleftCircle , IoIosArrowDroprightCircle } from "react-icons/io";
import { FaCrown , FaDownload } from "react-icons/fa";
import Button from './Button';
import { useNavigate } from 'react-router';
const Navbar = () => {
  const navigate = useNavigate();

  return (
  <>
    <div className='w-full flex justify-between items-center font-semibold'>
      <div className='flex items-center gap-2'>
       <IoIosArrowDropleftCircle onClick={() => navigate(-1)} size={24} className='cursor-pointer hover:scale-125 transition-all duration-300'/>
       <IoIosArrowDroprightCircle onClick={() => navigate(1)} size={24} className='cursor-pointer hover:scale-125 transition-all duration-300'/>
      </div>
      <div className='flex items-center gap-4'>
        <div className='hidden md:block'>
          <Button label={'Premium'} icon={<FaCrown size={18}/>}></Button>
        </div>
        <button className="group relative inline-flex h-10 items-center justify-center overflow-hidden rounded-full bg-transparent border-white border-2 px-3 font-medium text-white duration-300 cursor-pointer"><div className="translate-y-0 opacity-100 transition duration-300 group-hover:-translate-y-[150%] group-hover:opacity-0">Install App</div><div className="absolute translate-y-[150%] opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100"> <FaDownload/> </div></button>
        <p className='bg-sky-500 text-black w-8 h-8 rounded-full flex items-center justify-center cursor-pointer'>T</p>
      </div>
    </div>
    <div className='flex items-center gap-2 mt-4'>
     <p className='bg-white border-2 border-white text-black px-4 py-1 rounded-2xl cursor-pointer'>All</p>
     <p className='bg-transparent border-2 border-white text-white px-4 py-1 rounded-2xl cursor-pointer'>Music</p>
     <p className='bg-transparent border-2 border-white text-white px-4 py-1 rounded-2xl cursor-pointer'>Podcast</p>
    </div>
  </>
  )
}

export default Navbar