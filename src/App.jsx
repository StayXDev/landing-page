import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Team from "./components/Team";
import Join from "./components/Join";

function App() {
  return (
    <div className="min-h-screen bg-[#003354]">
      <Header />
      <Hero />
      <Team />
      <Join />
    </div>
  );
}

export default App;
