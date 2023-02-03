import { Routes, Route, BrowserRouter } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import CatDetails from "./pages/CatDetails";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details" element={<CatDetails />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default AppRoutes;
