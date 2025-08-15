import useSpacialStore from "../../store/SpacialStore";
import { useIsMobile } from "../shared/hooks/useIsMobile";
import './Footer.css'

const Footer = ({ isPackages }: { isPackages?: boolean  }) => {

  const { textHoovered } = useSpacialStore();
  const isMobile = useIsMobile();

  return (
    <footer className="fixed px-[var(--horizontal-padding)] w-full h-20 flex justify-around bottom-0 left-0 z-2 bg-black
                       sm:bg-transparent">
      {isPackages ? (
         <div className="w-1/2 mt-[-20px]">
          <p className="text-2xl text-white font-[Exan]">
            <span className="text-[var(--cyan)] text-[1rem]">
              <a
                href="/packages#exploreDetail"
              >
                {'Click here to break it down & compare'.toUpperCase()}
              </a>
            </span><br/>
            <p className="text-3xl"  style={{fontFamily: 'Bebas Neue'}}>Choose a plan so powerful<br/> that it bends reality</p>
          </p>
        </div>
      ) : (
        <div className="hidden w-1/2 items-center
                        sm:flex">
          <p className="text-xl text-white font-[Exan]">
            <span className="text-[var(--cyan)]">{textHoovered.split(']')[0]}{']'}</span>
            {textHoovered.split(']')[1]}
          </p>
        </div>
      )}
     
      <div className="w-full flex justify-between items-start
                      sm:w-1/2 sm:justify-end">
        <a
          href="/portfolio"
          className="hidden ml-0 px-5 py-2 text-white text-2xl rounded-2xl border border-white cursor-pointer font-[Exan] hover:bg-white/20
                     sm:block sm:ml-10"
        >
          PORTFOLIO
        </a>
        <a
          href="/packages"
          className="ml-0 px-5 py-2 text-white text-2xl rounded-2xl border border-white cursor-pointer font-[Exan] hover:bg-white/20
                     sm:ml-10"
        >
          PACKAGES
        </a>
        <a
          href="/contact"
          className="w-[175px] ml-0 text-center px-5 py-2 text-white text-2xl rounded-2xl border border-white cursor-pointer font-[Exan] hover:bg-white/20
                     sm:ml-10"
        >
          CONTACT
        </a>
      </div>
    </footer>
    
    // <footer className="footer-container fixed px-[var(--horizontal-padding)] w-full h-20 flex bottom-0 left-0 z-2">
    //   {isPackages ? (
    //     <div className="footer-left w-1/2 mt-[-20px]">
    //       <p className="text-2xl text-white font-[Exan]">
    //         <span className="text-[var(--cyan)] text-[1rem]">
    //           <a href="/packages#exploreDetail">
    //             Click here to break it down & compare 
    //           </a>
    //         </span><br/>
    //         <p className="text-3xl" style={{fontFamily: 'Bebas Neue'}}>
    //           Choose a plan so powerful<br/> that it bends reality
    //         </p>
    //       </p>
    //     </div>
    //   ) : (
    //     <div className="footer-left w-1/2 flex items-center">
    //       <p className="text-xl text-white font-[Exan] text-center">
    //         <span className="text-[var(--cyan)]">{textHoovered.split(']')[0]}{']'}</span>
    //         {textHoovered.split(']')[1]}
    //       </p>
    //     </div>
    //   )}

    //   <div className="footer-right w-1/2 flex justify-end items-start">
    //     {!isMobile && (
    //       <a
    //         href="/portfolio"
    //         className="ml-10 px-5 py-2 text-white text-2xl rounded-2xl border border-white cursor-pointer font-[Exan] hover:bg-white/20"
    //       >
    //         PORTFOLIO
    //       </a>
    //     )}
    //     <a
    //       href="/packages"
    //       className="ml-10 px-5 py-2 text-white text-2xl rounded-2xl border border-white cursor-pointer font-[Exan] hover:bg-white/20"
    //     >
    //       PACKAGES
    //     </a>
    //     <a
    //       href="/contact"
    //       className="w-[175px] text-center ml-10 px-5 py-2 text-white text-2xl rounded-2xl border border-white cursor-pointer font-[Exan] hover:bg-white/20"
    //     >
    //       CONTACT
    //     </a>
    //   </div>
    // </footer>

  );
};

export default Footer;
