import { useState } from "react";
import Navbar from "../navbar/Navbar";
import SocialMediaComponent from "./components/SocialMedia.Component";

const contact = () => {
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
    <main className="w-full h-lvh">
      <Navbar />
      <a href="/">
        <img
          src="https://imagedelivery.net/zbd8viznFTU9Xm-HIspwjQ/47a4e8a6-c2b3-429f-c834-86343375a200/public"
          alt="solar system background"
          className="fixed w-full h-full left-1/2 -translate-x-1/2 object-cover mix-blend-screen"
        />
      </a>
      {/* Start Section */}
      {!isContact && (
        <>
          <img
            src="https://imagedelivery.net/zbd8viznFTU9Xm-HIspwjQ/09cb6e8c-0893-4171-0e4a-dce1538b5d00/public"
            alt="astronaut alerta labs"
            className="absolute bottom-[5%] left-1/2 -translate-x-1/2 h-[500px]"
          />
          <div className="fixed bottom-[20%] left-1/2 transform -translate-x-1/2">
            <button
              onClick={() => handleContactClick()}
              className="px-5 py-2 text-white text-2xl rounded-2xl border border-white bg-black cursor-pointer hover:bg-white/20"
            >
              INITIATE CONTACT
            </button>
          </div>
        </>
      )}

      {/* Form Section */}
      {isContact && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center z-50">
          <div className="text-left space-y-4 w-[600px] mt-[-5rem]">
            <h2 className="text-2xl font-bold mb-4 text-white uppercase">Let us absorb and</h2>
            <h2 className="text-2xl font-bold mb-4 text-white uppercase mt-[-15px]">transform your vision_</h2>

            <form
              onSubmit={handleSubmit}
              className="max-w-3xl mx-auto p-6 bg-[#000000ed] text-white rounded-xl border border-white space-y-4"
            >
              {/* Name + Email in one row */}
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

export default contact;
