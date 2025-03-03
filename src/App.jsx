import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Team from "./components/Team";
import Join from "./components/Join";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen pt-24 bg-[#003354]">
      <Header />
      <Hero />
      <Team />
      <Join />
      <Footer />
    </div>
  );
}

export default App;
