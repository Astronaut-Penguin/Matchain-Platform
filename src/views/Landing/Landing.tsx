// REACT
import React from "react";

// STYLES
import styles from "./Landing.module.css";

// SECTIONS IMPORTS
import { Home, Fighters, Education, Roadmap, About } from "../../sections";

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
    </section>
  );
};

export default Landing;