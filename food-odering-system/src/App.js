import { Route, Routes } from "react-router-dom";
import Nav from "./Components/NavBar/Nav";
import Home from "./pages/Home/Home";
import Cart from "./pages/Cart/Cart";
import PlaceOder from "./pages/PlaceOder/PlaceOder";
import Footer from "./Components/Footer/Footer";
import { useState } from "react";
import LogingPopup from "./Components/LogingPopUp/LogingPopup";

const App = () => {
  const [showloging, setShowloging] = useState(false);
  return (
    <>
      {showloging ? <LogingPopup setShowloging={setShowloging} /> : <></>}
      <div className="app">
        <Nav setShowloging={setShowloging} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/order" element={<PlaceOder />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
};

export default App;
