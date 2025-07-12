import React, { useContext } from 'react'
import {FaShuffle ,FaForwardStep, FaPlay ,FaBackwardStep,FaPause } from 'react-icons/fa6'
import { MdRepeatOne , MdFullscreen,MdSpeaker,MdVolumeUp } from "react-icons/md";
import { TbWindowMinimize } from "react-icons/tb";
import { PlayerContext } from '../context/PlayerContext';
const Player = () => {
  
  const {seekBar , seekBg , playStatus, play , pause , track , time , previous , next , seekSong} = useContext(PlayerContext);

  return (
    <div className='h-[10%] shadow-sm shadow-white flex justify-between items-center text-white px-4'>
      <div className='hidden lg:flex items-center gap-4'>
        <img className='w-12' src={track.image} alt="" />
        <div>
          <p>{track.name}</p>
          <p>{track.desc.slice(0,12)}</p>
        </div>
      </div>
      <div className='flex flex-col items-center gap-1 m-auto'>
       <div className='flex gap-4'>
        <FaShuffle size={22} className='cursor-pointer'/>
        <FaBackwardStep size={22} onClick={previous} className='cursor-pointer'/>
        {
          playStatus?<FaPause onClick={pause} size={22}  className='cursor-pointer'/>:<FaPlay onClick={play} size={22}  className='cursor-pointer'/>
        }
        <FaForwardStep size={22} onClick={next} className='cursor-pointer'/>
        <MdRepeatOne size={22} className='cursor-pointer'/>
       </div>
       <div className='flex items-center gap-5 '>
        <p>{time.currentTime.minute}:{time.currentTime.second}</p>
        <div ref={seekBg} onClick={seekSong} className='w-[60vw] max-w-[400px] bg-gray-300 rounded-full cursor-pointer overflow-hidden'>
          <hr ref={seekBar} className='h-1 border-none w-0 bg-green-800 rounded-full'/>
        </div>
        <p>{time.totalTime.minute}:{time.totalTime.second}</p>
       </div>
      </div>
      <div className='hidden lg:flex items-center gap-2 opcity-75'>
      <MdSpeaker  className='cursor-pointer'/>
      <MdVolumeUp  className='cursor-pointer'/>
      <div className='w-20 bg-white h-1 rounded cursor-pointer'>
      </div>
      <TbWindowMinimize className='cursor-pointer'/>
      <MdFullscreen  className='cursor-pointer'/>
      </div>
    </div>
  )
}

export default Player