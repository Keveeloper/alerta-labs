import { useState } from "react";
import Navbar from "../navbar/Navbar";
import SocialMediaComponent from "./components/SocialMedia.Component";
import CanvasComponent from "../shared/components/CanvasComponent";
import { useLocation } from "react-router";

const Contact = () => {
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
      {location.pathname === '/contact' && <Navbar /> }
      <img
        src="https://imagedelivery.net/zbd8viznFTU9Xm-HIspwjQ/67101712-efc2-4dcf-3bea-0fbafde64f00/public"
        alt="solar system background"
        className="fixed w-full h-full left-1/2 -translate-x-1/2 object-cover mix-blend-screen"
      />
      {/* Start Section */}
      {!isContact && (
        <>
          <img
            src="https://imagedelivery.net/zbd8viznFTU9Xm-HIspwjQ/5827b1f3-6cab-47c0-136f-338815997400/public"
            alt="astronaut alerta labs"
            style={{width: '50%'}}
            className="absolute h-[90%] bottom-[-5%] left-1/2 -translate-x-1/2"
          />
          <div className="fixed bottom-[20%] left-1/2 transform -translate-x-1/2">
            <button
              onClick={() => handleContactClick()}
              className="px-5 py-2 w-[390px] h-15 text-white text-3xl hover:text-black hover:bg-white rounded-2xl border border-white bg-black cursor-pointer font-[Exan]"
            >
              INITIATE CONTACT
            </button>
          </div>
          <div className="absolute px-[var(--horizontal-padding)] py-7 w-full bottom-0 flex justify-between">
            <div>
              <h2 className="text-white font-[Exan] text-3xl"><span className="text-[var(--cyan)]">[ASTRONAUT]</span> LOST IN THOUGHT</h2>
              <p className="text-white font-[Exan] text-xl">A GRAVITATIONAL FORCE FOR GROUNDBREAKING IDEAS_</p>
            </div>
            <div>
              <h2 className="text-white font-[Exan] text-3xl">{'HELLO@alertacreAtive.com_'.toUpperCase()}</h2>
              <p className="text-white font-[Exan] text-xl">{'©2025 Alerta Partnership llc'.toUpperCase()}</p>
            </div>
          </div>
        </>
      )}

      {/* Form Section */}
      {isContact && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center z-1">
          <div className="text-left space-y-4 w-[600px] mt-[-5rem]" style={{ fontFamily: "Bebas Neue" }}>
            {/* <h2 className="text-[3rem] mb-4 text-white uppercase mb-[0]">Let us absorb and</h2>
            <h2 className="text-[3rem] mb-4 text-white uppercase mt-[-15px] mb-[0]">transform your vision_</h2> */}

            <form
              onSubmit={handleSubmit}
              className="max-w-3xl mx-auto p-6 bg-[#000000ed] text-white rounded-xl border border-white space-y-4"
            >
              {/* Name + Email in one row */}
              <h2 className="text-[3rem] mb-4 text-white uppercase mb-[0]">Let us absorb and</h2>
              <h2 className="text-[3rem] mb-4 text-white uppercase mt-[-15px] mb-[0]">transform your vision_</h2>
              <div className="flex gap-4">
                <div className="w-1/2">
                  <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 rounded-[1rem] border border-white bg-transparent text-white focus:outline-none focus:ring focus:ring-white/30"
                  />
                </div>

                <div className="w-1/2">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 rounded-[1rem] border border-white bg-transparent text-white focus:outline-none focus:ring focus:ring-white/30"
                  />
                </div>
              </div>

              {/* Business */}
              <div>
                <input
                  type="text"
                  name="business"
                  placeholder="Business"
                  value={formData.business}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded-[1rem] border border-white bg-transparent text-white focus:outline-none focus:ring focus:ring-white/30"
                />
              </div>

              {/* Description */}
              <div>
                <textarea
                  name="description"
                  placeholder="Add a note. Talk to us about your next project.
We’ll bring it to life with precision and creativity"
                  value={formData.description}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded-tl-[16px] rounded-tr-[16px] rounded-bl-[16px] rounded-br-[0px] border border-white bg-transparent text-white focus:outline-none focus:ring focus:ring-white/30"
                />
              </div>

              {/* Button */}
              <div className="flex justify-end mt-[-21px]">
                <button
                    type="submit"
                    className="px-5 py-2 text-white text-xl border border-white bg-black hover:bg-white/20 transition rounded-b-[16px]"
                >
                    Send
                </button>
                </div>
            </form>
          </div>
        </div>
      )}

      <SocialMediaComponent />
    </main>
  );
};

export default Contact;
