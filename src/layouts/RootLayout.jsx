import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const RootLayout = () => {
  return (
    <>
      <Navbar />
      <main className="py-8 bg-[#1e1e1e] min-h-screen">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default RootLayout;