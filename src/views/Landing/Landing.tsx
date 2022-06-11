// REACT
import React from "react";

// STYLES
import styles from "./Landing.module.css";

// SECTIONS IMPORTS
import { Home } from "../../sections";

const Landing: React.FC = () => {
  ////////////
  // RENDER //
  ////////////
  return (
    <>
        <Home />
        {/* <BuyCards /> */}
        {/* <FooterV2 /> */}
        {/* <Footer /> */}
    </>
  );
};

export default Landing;