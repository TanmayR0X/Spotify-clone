import React, { useContext } from 'react'
import Navbar from './Navbar'
import { FaThumbsUp , FaMusic ,FaRegClock } from "react-icons/fa6";
import { useParams } from 'react-router'
import { albumsData, assets, songsData } from '../assets/assets';
import { PlayerContext } from '../context/PlayerContext';

const DisplayAlbum = () => {

  const{playWithId} = useContext(PlayerContext);

  const {id} = useParams();
  const albumData = albumsData[id];
  
  return (
    <>
    <Navbar/>
    <div className='mt-10 flex gap-8 flex-col md:flex-row md:items-end'>
      <img src={albumData.image} alt="" className='w-60 rounded' />
      <div className='flex flex-col'> 
        <p>Playlist</p>
        <h2 className='text-5xl font-bold mb-4 md:text-7xl'>{albumData.name}</h2>
        <h4>{albumData.desc}</h4>
        <div className='mt-1 flex flex-col gap-2'>
          <div className='flex gap-2 items-center'>
          <img src={assets.spotify_logo} className='inline-block w-5' alt="" />
          <b>Spotify</b>
          </div>
          <span className='flex items-center gap-2'><FaThumbsUp/>1,234,345</span>
           <b className='flex items-center gap-2'><FaMusic/> 50 songs</b>
          <span className='flex items-center gap-2'><FaRegClock/>5 hr 30 min</span> 
        </div>
      </div>
    </div>
    <div className='grid grid-cols-3 sm:grid-cols-4 mt-10 mb-4 pl-2 text-[#d2cdcd]'>
      <p>
        <b className='mr-4'>Title</b>
      </p>
      <p>Album</p>
      <p className='hidden sm:block'>Date Added</p>
       <FaRegClock className='m-auto w-full'/>
    </div>
    <hr />
    {
      songsData.map((item , index) => (
        <div onClick={() => playWithId(item.id)}
        key={index}
        className='grid grid-cols-3 sm:grid-cols-4 gap-2 p-2 items-center text-[#d2cdcd] hover:bg-[#ffffff2b] cursor-pointer'>
          <p className='text-white'>
           <b className='mr-4 text-[#d2cdcd]'>{index+1}</b>
           <img src={item.image} alt="" className='inline w-10 mr-5'/>
           {item.name}
          </p>
          <p className='text-[15px]'>{albumData.name}</p>
          <p className='text-[15px] hidden sm:block'>5 days ago</p>
          <p className='text-[15px] text-center'>{item.duration}</p>
        </div>
      ))
    }
    </>
  )
}

export default DisplayAlbum