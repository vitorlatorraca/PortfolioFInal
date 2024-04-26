import React from "react";
import "./App.css";
import About from './components/about/About';
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import Services from "./components/services/Services";
import Skills from "./components/skills/Skills";
import Work from "./components/work/Work";

const App = () => {
  return (
    <>
    <Header />
    <main className="main">
      <Home/>
      <About/>
      <Skills/>
      <Work/>
      <Services />
      <Contact />
      <Footer />
    </main>
    </>
  )
}

export default App;