const Navbar = () => {
  return (
    <nav className="fixed px-[var(--horizontal-padding)] w-full h-20 top-0 left-0 flex justify-between items-center bg-black z-2">
      <a href="/">
        <img
          src="https://imagedelivery.net/zbd8viznFTU9Xm-HIspwjQ/3a102297-c7f1-4c13-82a7-84d2623d1b00/public"
          alt="Alerta labs logo png"
          className="w-[200px] cursor-pointer
                     sm:w-[280px]"
        />
      </a>
      <img
        src="https://imagedelivery.net/zbd8viznFTU9Xm-HIspwjQ/c184e61c-2329-4c66-c753-12d21a40f400/public"
        alt="Alerta labs logo png"
        className="cursor-pointer
                   sm:hidden"
      />
    </nav>
  );
};

export default Navbar;
