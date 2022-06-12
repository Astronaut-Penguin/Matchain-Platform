// REACT
import React from "react";

// STYLES
import styles from "./Landing.module.css";

// SECTIONS IMPORTS
import { Home, Fighters } from "../../sections";

const Landing: React.FC = () => {
  ////////////
  // RENDER //
  ////////////
  return (
    <>
        <Home />
        <Fighters />
        {/* <FooterV2 /> */}
        {/* <Footer /> */}
    </>
  );
};

export default Landing;