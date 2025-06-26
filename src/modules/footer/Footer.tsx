import useSpacialStore from "../../store/SpacialStore";

const Footer = ({ isPackages }: { isPackages?: boolean  }) => {

  const { textHoovered } = useSpacialStore();

  return (
    <footer className="fixed px-[var(--horizontal-padding)] w-full h-20 flex bottom-0 left-0 z-2">
      {isPackages ? (
         <div className="w-1/2 mt-[-20px]">
          <p className="text-2xl text-white font-[Exan]">
            <span className="text-[var(--cyan)] text-[1rem]">
              <a
                href="/packages#exploreDetail"
              >
                Click here to break it down & compare 
              </a>
            </span><br/>
            <p className="text-3xl"  style={{fontFamily: 'Bebas Neue'}}>Choose a plan so powerful<br/> that it bends reality</p>
          </p>
        </div>
      ) : (
        <div className="w-1/2 flex items-center">
          <p className="text-xl text-white font-[Exan]">
            <span className="text-[var(--cyan)]">{textHoovered.split(']')[0]}{']'}</span>
            {textHoovered.split(']')[1]}
          </p>
        </div>
      )}
     
      <div className="w-1/2 flex justify-end items-start">
        {/* <button className="w-[175px] text-center ml-10 px-5 py-2 text-white text-2xl rounded-2xl border border-white cursor-pointer font-[Exan] hover:bg-white/20">
          Portfolio
        </button> */}
        <a
          href="/portfolio"
          className="ml-10 px-5 py-2 text-white text-2xl rounded-2xl border border-white cursor-pointer font-[Exan] hover:bg-white/20"
        >
          Portfolio
        </a>
        <a
          href="/packages"
          className="ml-10 px-5 py-2 text-white text-2xl rounded-2xl border border-white cursor-pointer font-[Exan] hover:bg-white/20"
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
    </footer>
  );
};

export default Footer;
