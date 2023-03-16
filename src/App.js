import React from "react";
import Header from "./components/Head/Header";
import "./App.css"
import Home from "./components/Hero/Home";
import Contact from "./components/Contact/Contact";
import Footer from "./Footer";
import Portfolio from "./components/Portfolio/Portfolio";


const App = () => {
  return (
    <>
    <Header/>
    <Home/>
    <Portfolio/>
    <Contact/>
    <Footer/>
    </>
  )
}

export default App 

