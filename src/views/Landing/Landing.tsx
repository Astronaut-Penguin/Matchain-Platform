// REACT
import React from "react";

// STYLES
import styles from "./Landing.module.css";

// SECTIONS IMPORTS
import { Header, Home, Fighters, Education, Roadmap, About, Team, Footer } from "../../sections";

const Landing: React.FC = () => {
  ////////////
  // RENDER //
  ////////////
  return (
    <section className={styles.Container}>
      <Header />
      <Home />
      <Fighters />
      <Education />
      <Roadmap />
      <About />
      <Team />
      <Footer />
    </section>
  );
};

export default Landing;