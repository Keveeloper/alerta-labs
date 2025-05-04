const Footer = () => {
  return (
    <footer className="fixed px-[var(--horizontal-padding)] w-full h-20 flex bottom-0 left-0">
      <div className="w-1/2">
        <p className="text-2xl text-white">
          <span className="text-[var(--cyan)]">[futurebit]</span> Experimental
          TECH, yet essential_
        </p>
      </div>
      <div className="w-1/2 flex justify-end items-start">
        <button className="ml-10 px-5 py-2 text-white text-2xl rounded-2xl border border-white cursor-pointer hover:bg-white/20">
          PORTFOLIO
        </button>
        <button className="ml-10 px-5 py-2 text-white text-2xl rounded-2xl border border-white cursor-pointer hover:bg-white/20">
          PACKAGES
        </button>
        <a
          href="/contact"
          className="ml-10 px-5 py-2 text-white text-2xl rounded-2xl border border-white cursor-pointer hover:bg-white/20"
        >
          CONTACT
        </a>
      </div>
    </footer>
  );
};

export default Footer;
