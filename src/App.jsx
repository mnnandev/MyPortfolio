import { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Skill from "./components/Skills/Skill";
import ContactUs from "./components/Skills/contact/ContactUs";

function App() {
  return (
    <>
      <Header />
      <main className="main">
        <Home />
        <About />
        <Skill />
        <ContactUs />
      </main>
    </>
  );
}

export default App;
