import useSpacialStore from "../../store/SpacialStore";

const Footer = () => {

  const { textHoovered } = useSpacialStore();

  return (
    <footer className="fixed px-[var(--horizontal-padding)] w-full h-20 flex bottom-0 left-0 z-2">
      <div className="w-1/2">
        <p className="text-2xl text-white font-[Exan]">
          <span className="text-[var(--cyan)]">{textHoovered.split(']')[0]}{']'}</span>
          {textHoovered.split(']')[1]}
        </p>
      </div>
      <div className="w-1/2 flex justify-end items-start">
        <button className="ml-10 px-5 py-2 text-white text-2xl rounded-2xl border border-white cursor-pointer font-[Exan] hover:bg-white/20">
          Portfolio
        </button>
        <a
          href="/packages"
          className="ml-10 px-5 py-2 text-white text-2xl rounded-2xl border border-white cursor-pointer font-[Exan] hover:bg-white/20"
        >
          Packages
        </a>
        <a
          href="/contact"
          className="ml-10 px-5 py-2 text-white text-2xl rounded-2xl border border-white cursor-pointer font-[Exan] hover:bg-white/20"
        >
          Contact
        </a>
      </div>
    </footer>
  );
};

export default Footer;
