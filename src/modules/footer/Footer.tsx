import { useEffect, useRef, useState } from "react";
import useSpacialStore from "../../store/SpacialStore";
import PackagesView from "../packages/Packages";
import Modal from "../shared/components/PackagesModal";

const Footer = () => {

  const { textHoovered } = useSpacialStore();
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <footer className="fixed px-[var(--horizontal-padding)] w-full h-20 flex bottom-0 left-0 z-2">
      <div className="w-1/2 flex items-center">
        <p className="text-xl text-white font-[Exan]">
          <span className="text-[var(--cyan)]">{textHoovered.split(']')[0]}{']'}</span>
          {textHoovered.split(']')[1]}
        </p>
      </div>
      <div className="w-1/2 flex justify-end items-start">
        <button className="w-[175px] text-center ml-10 px-5 py-2 text-white text-2xl rounded-2xl border border-white cursor-pointer font-[Exan] hover:bg-white/20">
          Portfolio
        </button>
        <a
          // href="/packages"
          onClick={() => setIsModalOpen(true)}
          className="w-[175px] text-center ml-10 px-5 py-2 text-white text-2xl rounded-2xl border border-white cursor-pointer font-[Exan] hover:bg-white/20"
        >
          Packages
        </a>
        <a
          href="/contact"
          className="w-[175px] text-center ml-10 px-5 py-2 text-white text-2xl rounded-2xl border border-white cursor-pointer font-[Exan] hover:bg-white/20"
        >
          Contact
        </a>
      </div>
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <PackagesView/>
      </Modal>
    </footer>
  );
};

export default Footer;
