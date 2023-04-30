import React from "react";
import Navbar from "./components/Navbar";
import CompanyDetails from "./components/CompanyDetails";
import Portfolio from "./components/Portfolio";
import Reviews from "./components/Reviews";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <CompanyDetails />
      <Portfolio />
      <Reviews />
      <Footer />
    </div>
  );
}

export default App;
