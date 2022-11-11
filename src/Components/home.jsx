import React from "react";
import Navbar from "./navbar";
import Header from "./header";
import Feature from "./feature";
import Offer from "./Offer";
import About from "./About";
import Contact from "./Contact";
import Blog from "./Blog";

function Home() {
    return(
        <div >
        <Navbar />
      <Header />
      <Feature />
      <Offer />
      <Blog />
      <About />
      <Contact />
        </div>
    )
}

export default Home;