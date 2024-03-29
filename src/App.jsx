import React from "react";
import Header from "./components/Header/Header"
import Nav from "./components/Nav/Nav"
import About from "./components/About/About"
import Experience from "./components/Experience/Experience"
// import Services from "./components/Services/Services"
import Portfolio from "./components/Portfolio/Portfolio"
import Design from "./components/Design/Design"
import Contact from "./components/Contact/Contact"
import Footer from "./components/Footer/Footer"

const App = () => {
    return (
        <>
        <Header />
        <Nav />
        <About />
        <Experience />
        <Portfolio />
        <Design/>
        <Contact />
        <Footer />

        </>
    )
}

export default App;
