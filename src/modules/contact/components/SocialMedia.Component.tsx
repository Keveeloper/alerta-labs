import { FaFacebookF, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { FaXTwitter } from "react-icons/fa6"
import { useLocation } from 'react-router';

const SocialMediaComponent = () => {
  const location = useLocation();
    return (
        <div className={`absolute w-[65px] h-[254px] top-1/3 ${location.pathname === '/contact' ? 'right-10' : 'left-10'} mr-[15px] flex flex-col items-center border border-white  bg-transparent rounded-2xl z-50`}>
          <div className="p-[10px] w-full h-1/4 border-b border-white flex justify-center items-center">
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="w-2/3 h-2/3 text-white hover:text-pink-800 text-xl">
              <FaInstagram className='w-full h-full'/>
            </a>
          </div>
          <div className="p-[10px] w-full h-1/4 border-b border-white flex justify-center items-center">
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="w-2/3 h-2/3 text-white hover:text-blue-800 text-xl">
              <FaFacebookF className='w-full h-full'/>
            </a>
          </div>
          <div className="p-[10px] w-full h-1/4 border-b border-white flex justify-center items-center">
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="w-2/3 h-2/3 text-white hover:text-blue-800 text-xl">
              <FaLinkedin className='w-full h-full'/>
            </a>
          </div>
          <div className="p-[10px] w-full h-1/4 flex justify-center items-center">
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="w-2/3 h-2/3 text-white hover:text-blue-600 text-xl">
              <FaXTwitter className='w-full h-full'/>
            </a>
          </div>
      </div>
    );

}

export default SocialMediaComponent