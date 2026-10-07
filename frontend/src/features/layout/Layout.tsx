// @path: src/features/layout/Layout.tsx
// Packages import
import { Outlet } from "react-router-dom";
// Components import
import NavBar from "../navBar";
import Footer from "./components/Footer";

const Layout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      <main className="min-w-screen">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
