import { HiOutlineHome, HiOutlineSearch } from "react-icons/hi";
import { HiMiniSquare3Stack3D, HiArrowRight, HiPlus } from "react-icons/hi2";
import { TbPlaylistAdd } from "react-icons/tb";

import Button from '../components/Button'
import { useNavigate } from "react-router";

const Sidebar = () => {
   
  const navigate = useNavigate();

  return (
    <div className="w-[25%] h-full p-2 flex-col gap-2 text-white hidden lg:flex">
      <div className="bg-[#121212] h-[15%] rounded-sm flex flex-col justify-around shadow shadow-neutral-300">
        <div onClick={() => navigate('/')} className="flex items-center gap-1 pl-8 cursor-pointer ">
          <HiOutlineHome size={22} />
          <p className="font-bold">Home</p>
        </div>
        <div className="flex items-center gap-1 pl-8 cursor-pointer">
          <HiOutlineSearch size={22} />
          <p className="font-bold">Search</p>
        </div>
      </div>
      <div className="bg-[#121212] h-[85%] rounded-sm shadow shadow-neutral-300">
        <div className="p-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <HiMiniSquare3Stack3D size={26} />
            <p className="font-semibold">My Library</p>
          </div>
          <div className="flex items-center gap-3">
            <HiArrowRight size={24} />
            <HiPlus size={24} />
          </div>
        </div>
        <div className="p-4 bg-[#242424] m-2 rounded-sm font-semibold flex flex-col items-start justify-start">
          <h1 className="mb-4">Create playlist</h1>
          <Button label={"Create"} icon={<TbPlaylistAdd size={24}/>}></Button>
        </div>
        <div className="p-4 bg-[#242424] m-2 rounded-sm font-semibold flex flex-col items-start justify-start mt-4">
          <h1 className="mb-4">Listen Podcasts</h1>
          <Button label={"Browse Podcast"}></Button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
