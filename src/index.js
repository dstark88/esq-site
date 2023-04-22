import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import Layout from "./Pages/Layout/Layout";
import Home from "./Pages/Home/Home";
import Attorneys from "./Pages/Attorneys/Attorneys";
import PracticeAreas from "./Pages/PracticeAreas/PracticeAreas";
import AboutUs from "./Pages/AboutUs/AboutUs";
import Contact from "./Pages/Contact/Contact";
import NoPage from "./Pages/NoPage/NoPage";
import Boulton from "./Pages/Attorneys/Boulton/Boulton";
import Denny from "./Pages/Attorneys/Denny/Denny";
import Bankruptcy from "./Pages/Bankruptcy/Bankruptcy";
import BusinessLaw from "./Pages/BusinessLaw/BusinessLaw";
import RealEstateLaw from "./Pages/RealEstateLaw/RealEstateLaw";
import Taxation from "./Pages/Taxation/Taxation";
import { ScrollToTop } from "./Components/ScrollToTop/ScrollToTop";

const root = ReactDOM.createRoot(document.getElementById("root"));
export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route
          onUpdate={() => window.scrollTo(0, 0)}
          path=""
          element={<Layout />}
        >
          <Route index path="/esq-site" element={<Home />} />
          <Route path="/esq-site/attorneys" element={<Attorneys />} />
          <Route path="/esq-site/attorneys/boulton" element={<Boulton />} />
          <Route path="/esq-site/attorneys/denny" element={<Denny />} />
          <Route path="/esq-site/practice-areas" element={<PracticeAreas />} />
          <Route
            path="/esq-site/practice-areas/bankruptcy"
            element={<Bankruptcy />}
          />
          <Route
            path="/esq-site/practice-areas/businessLaw"
            element={<BusinessLaw />}
          />
          <Route
            path="/esq-site/practice-areas/real-estate-law"
            element={<RealEstateLaw />}
          />
          <Route
            path="/esq-site/practice-areas/taxation"
            element={<Taxation />}
          />
          <Route path="/esq-site/about-us" element={<AboutUs />} />
          <Route path="/esq-site/contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

root.render(<App />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
