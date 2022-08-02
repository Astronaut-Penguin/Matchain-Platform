// IMPORT REACT
import React from "react";

// IMPORT STYLES
import styles from "./Midpage.module.css";

// IMPORT COMPONENT
import BlueButton from "../../components/BlueButton/BlueButton";

//Next image
import Image from "next/image";

type MidpageProps = {
  style?: React.CSSProperties;
};

export const Midpage: React.FC<MidpageProps> = () => {
  ////////////
  // RENDER //
  ////////////
  return (
    <div className={styles.Container}>
      <div className={styles.Subcontainer}>
        <h2 className={styles.GameTitle}>WORKAHOLIC</h2>
        <h3 className={styles.Newgame}>NEW GAME!</h3>
      </div>

      <h3 className={styles.Description}>
        {" "}
        Boredom may be a daily thing in some works, but... have you worked on
        customer reception on a diner?
      </h3>
    </div>
  );
};

export default Midpage;
