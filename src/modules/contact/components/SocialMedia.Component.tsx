import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { FaXTwitter } from "react-icons/fa6"

const SocialMediaComponent = () => {
    return (
        <div className="fixed top-1/3 right-0 mr-[15px] flex flex-col items-center border border-white  bg-transparent rounded-2xl z-50">
        <div className="p-[10px] border-b border-white">
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-pink-800 text-xl">
            <FaInstagram />
          </a>
        </div>
        <div className="p-[10px] border-b border-white">
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-800 text-xl">
            <FaFacebookF />
          </a>
        </div>
        <div className="p-[10px] border-b border-white">
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-800 text-xl">
            <FaLinkedin />
          </a>
        </div>
        <div className="p-[10px]">
          <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-600 text-xl">
            <FaXTwitter />
          </a>
        </div>
      </div>
    );

}

export default SocialMediaComponent