import { useEffect, useRef } from "react";
import { NavLink, Link } from "react-router-dom";

const Navbar = () => {
  let navbar = useRef(null);
  let prevScroll = useRef(0);

  const handleScroll = () => {
    let currentScroll = window.scrollY;
    let navbarEl = navbar.current;
    if (currentScroll > prevScroll.current) {
      navbarEl.classList.add("-translate-y-full");
    } else {
      navbarEl.classList.remove("-translate-y-full");
    }
    prevScroll.current = currentScroll;
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      ref={navbar}
      className="fixed top-0 left-0 right-0 bg-[#161616] transform transition duration-500 z-10 ease-linear"
    >
      <div className="flex justify-between max-w-[1280px] py-[18px] px-3 mx-auto text-slate-200/90">
        <h2 className="font-extrabold">
          <Link to="/">100 MOVIES</Link>
        </h2>
        <nav className="flex space-x-6 font-bold">
          <NavLink to="/">Home</NavLink>
          <NavLink to="list">Top100</NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
