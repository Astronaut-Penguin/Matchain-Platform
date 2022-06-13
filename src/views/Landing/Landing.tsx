// REACT
import React from "react";

// STYLES
import styles from "./Landing.module.css";

// SECTIONS IMPORTS
import { Home, Fighters, Education, Roadmap, About, Team } from "../../sections";

const Landing: React.FC = () => {
  ////////////
  // RENDER //
  ////////////
  return (
    <section className={styles.Container}>
      <Home />
      <Fighters />
      <Education />
      <Roadmap />
      <About />
      <Team />
    </section>
  );
};

export default Landing;