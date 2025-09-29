import { useState } from "react";
import Navbar from "../navbar/Navbar";
import SocialMediaComponent from "./components/SocialMedia.Component";
import CanvasComponent from "../shared/components/CanvasComponent";
import { useLocation } from "react-router";
import { useIsMobile } from "../shared/hooks/useIsMobile";
import { getImageUrlMobile } from "../../shared/image-url/image-urls-mobile";
import { getImageUrl } from "../../shared/image-url/image-urls";

const Contact = () => {

  const isMobile = useIsMobile();
  const location = useLocation();
  const [isContact, setIsContact] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    business: "",
    description: "",
  });

  const handleChange = (e: { target: { name: any; value: any } }) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  const handleContactClick = () => {
    setIsContact((prev) => !prev);
  };

  return (
    <main className="relative w-full h-screen overflow-hidden">
      <CanvasComponent/>
      <img 
          className="absolute w-full h-full z-1 pointer-events-none opacity-80 object-fit
                      sm:opacity-100 md:z-0"
          src={getImageUrl('vignette')}
          alt="vignette"
          style={{objectFit: 'fill'}}
      />
      {location.pathname === '/contact' && <Navbar /> }
      <img
        src={`${isMobile ? getImageUrlMobile('home_background_mobile') : getImageUrl('homeBackground')}`}
        alt="solar system background"
        className="absolute w-full h-full left-1/2 -translate-x-1/2 object-cover mix-blend-screen"
      />
      {/* Start Section */}
      {!isContact && (
        <>
          <img
            src="https://imagedelivery.net/zbd8viznFTU9Xm-HIspwjQ/51238595-4148-4d5a-b450-51e838ec2500/public"
            alt="astronaut alerta lab"
            style={{width: isMobile ? '100%' : '50%', height: isMobile ? '80%' : 'auto'}}
            className="absolute h-[90%] bottom-[-5%] left-1/2 -translate-x-1/2"
          />
          <div className="absolute w-[60%] bottom-[20%] left-1/2 transform -translate-x-1/2
                          md:w-auto">
            <button
              onClick={() => handleContactClick()}
              className="px-5 py-2 w-full h-15 text-white text-xl hover:text-black hover:bg-white rounded-2xl border-2 border-white bg-black cursor-pointer font-[Exan]
                         md:w-[390px] md:text-3xl"
            >
              INITIATE CONTACT
            </button>
          </div>
          <div className="absolute px-0 py-0 w-full bottom-0 flex flex-col justify-between
                          md:flex-row md:px-[var(--horizontal-padding)] md:py-7">
            <div className="w-full h-1/2 bg-gradient-to-b from-transparent to-black
                            md:to-transparent">
              <h2 className="text-white font-[Exan] text-base text-center
                             md:text-3xl md:text-start"><span className="text-[var(--cyan)]">[ASTRONAUT] </span><span className="text-red-500">LOST IN THOUGHT</span></h2>
              <p className="text-white font-[Exan] text-base text-center
                            md:text-xl md:text-start">A UNIVERSAL FORCE FOR GROUNDBREAKING IDEAS_</p>
            </div>
            <div className="w-full h-1/2 bg-black
                            md:bg-transparent">
              <h2 className="text-white font-[Exan] text-base font-semibold text-center
                             md:text-3xl md:text-end">{'HELLO@alertacreAtive.com_'.toUpperCase()}</h2>
              <p className="text-white font-[Exan] text-base text-center
                            md:text-xl md:text-end">{'©2025 Alerta Partnership llc'.toUpperCase()}</p>
            </div>
          </div>
        </>
      )}

      {/* Form Section */}
      {isContact && (
        <div className="relative w-full h-full flex items-center justify-center z-1">
          <div className="relative w-[70%] h-auto text-left left-3.5
                          md:w-[600px] md:h-auto md:left-0" style={{ fontFamily: "Bebas Neue" }}>
            {/* <h2 className="text-[3rem] mb-4 text-white uppercase mb-[0]">Let us absorb and</h2>
            <h2 className="text-[3rem] mb-4 text-white uppercase mt-[-15px] mb-[0]">transform your vision_</h2> */}

            <form
              onSubmit={handleSubmit}
              className="w-full h-full p-6 bg-[#000000ed] text-white rounded-xl border-2 border-white space-y-4
              md:w-auto md:h-auto"
            >
              {/* Name + Email in one row */}
              <h2 className="text-4xl text-white uppercase
                             md:text-[3rem]">Let us absorb and</h2>
              <h2 className="text-4xl text-white uppercase mt-[-15px]
                             md:text-[3rem]">transform your vision_</h2>
              <div className="flex flex-col gap-4
                              md:flex-row">
                <div className="w-full md:w-1/2">
                  <input
                    type="text"
                    name="name"
                    placeholder="Name/company"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 rounded-[1rem] border-2 border-white bg-transparent text-white focus:outline-none focus:ring focus:ring-white/30"
                  />
                </div>

                <div className="w-full md:w-1/2">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 rounded-[1rem] border-2 border-white bg-transparent text-white focus:outline-none focus:ring focus:ring-white/30"
                  />
                </div>
              </div>

              {/* Business */}
              {/* <div>
                <input
                  type="text"
                  name="business"
                  placeholder="Business"
                  value={formData.business}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded-[1rem] border border-white bg-transparent text-white focus:outline-none focus:ring focus:ring-white/30"
                />
              </div> */}

              {/* Description */}
              <div>
                <textarea
                  name="description"
                  placeholder="Add a note. Talk to us about your next project. We’ll bring it to life with precision and creativity"
                  value={formData.description}
                  onChange={handleChange}
                  className="w-full min-h-[150px] px-4 py-2 rounded-tl-[16px] rounded-tr-[16px] rounded-bl-[16px] rounded-br-[0px] border-2 border-white bg-transparent text-white focus:outline-none focus:ring focus:ring-white/30
                             md:min-h-[110px]"
                />
              </div>

              {/* Button */}
              <div className="flex justify-end mt-[-21px]">
                <button
                    type="submit"
                    className="px-5 py-2 text-white text-xl border-2 border-white bg-black hover:bg-white/20 transition rounded-b-[16px]"
                >
                    Send
                </button>
                </div>
            </form>
          </div>
          <div className="absolute p-5 w-full h-auto bottom-0 bg-gradient-to-b from-transparent to-black
                          md:bg-transparent">
            <h2 className="text-white font-[Exan] text-base font-semibold text-center
                            md:text-3xl">{'HELLO@alertacreAtive.com_'.toUpperCase()}</h2>
            <p className="text-white font-[Exan] text-base text-center
                          md:text-xl">{'©2025 Alerta Partnership llc'.toUpperCase()}</p>
          </div>
        </div>
      )}

      <SocialMediaComponent />
    </main>
  );
};

export default Contact;
