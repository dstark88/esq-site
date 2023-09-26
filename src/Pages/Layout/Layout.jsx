import { Outlet } from "react-router-dom";
import NavBar from "../../Components/NavBar/NavBar";
import AppStore from "../../Components/AppStore/AppStore";
import Footer from "../../Components/Footer/Footer";

export default function Layout() {
  return (
    <div className="">
      <div className="flex flex-col h-screen text-lg overflow-y-scroll no-scrollbar">
        <NavBar />
        <main className="bg-green-50 flex-grow p-5 md:p-20">
          <Outlet />
        </main>
        <AppStore />
        <Footer />
      </div>
    </div>
  );
}
