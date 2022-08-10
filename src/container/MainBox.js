import React from "react";
import Footer from "../components/Footer"
import Technical from "../components/Technical";
import Projects from "../components/Projects";
import Header from "../components/Header";
import About from "../components/About";
import Home from "../components/Home";

const MainBox = () => {

    return (
        <div class="main-box">

            {/* <Header /> */}
            <Home />
            {/* <br></br> */}
            <About />
            {/* <br></br> */}
            <Projects />
            {/* <br></br> */}
            <Technical />
            {/* <br></br> */}
            <Footer />
        </div>
    );

};

export default MainBox;