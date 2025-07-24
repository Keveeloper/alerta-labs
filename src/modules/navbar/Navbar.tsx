const Navbar = () => {
  return (
    <nav className="fixed pl-[var(--horizontal-padding)] w-full h-20 top-0 left-0 flex items-center z-2">
      <a href="/">
        <img
          src="https://imagedelivery.net/zbd8viznFTU9Xm-HIspwjQ/3a102297-c7f1-4c13-82a7-84d2623d1b00/public"
          alt="Alerta labs logo png"
          className="w-[280px] cursor-pointer"
        />
      </a>
    </nav>
  );
};

export default Navbar;
