import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="w-full bg-black text-slate-100/90 fixed left-0 right-0 bottom-0  box-border">
      <section className="flex justify-between max-w-[960px] mx-auto px-4 items-end">
        <div className="flex flex-col space-y-1 py-1 font-semibold text-sm">
          <Link to="/" className="hover:text-slate-400/90">
            Home
          </Link>
          <Link to="/list" className="hover:text-slate-400/90">
            Top100
          </Link>
        </div>

        <div>All right preserved</div>
      </section>
    </footer>
  );
};

export default Footer;
