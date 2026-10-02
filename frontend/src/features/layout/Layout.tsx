// @path: src/features/layout/Layout.tsx
// Packages import
import { Outlet } from "react-router-dom";
// Modular styles import
// Components import
import NavBar from "../navBar";
import Footer from "./components/Footer";

export function Layout() {
  return (
    <div className="">
      <NavBar />
      <div className="">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}
