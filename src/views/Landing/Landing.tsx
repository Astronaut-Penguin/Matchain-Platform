// REACT
import React from "react";

// STYLES
import styles from "./Landing.module.css";

// SECTIONS IMPORTS
import { Home, Fighters, Education } from "../../sections";

const Landing: React.FC = () => {
  ////////////
  // RENDER //
  ////////////
  return (
    <section className={styles.Container}>
      <Home />
      <Fighters />
      <Education />
      {/* <Footer /> */}
    </section>
  );
};

export default Landing;