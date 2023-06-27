import { Outlet, Link } from "react-router-dom";
import NavBar from "../../Components/NavBar/NavBar";
import AppStore from "../../Components/AppStore/AppStore";
import Footer from "../../Components/Footer/Footer";

export default function Layout() {
  return (
    <div className="flex flex-col h-screen text-lg overflow-hidden">
      <header className="">
        <NavBar />
      </header>
      <main className="bg-green-50 flex-grow p-20">
        <Outlet />
      </main>
      <footer className="">
        <AppStore />
        <Footer />
      </footer>
    </div>
  );
}
