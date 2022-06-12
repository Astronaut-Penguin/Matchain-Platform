// IMPORT REACT
import React from "react";

// IMPORT STYLES
import styles from "./Roadmap.module.css";

type RoadmapProps = {
  style?: React.CSSProperties;
};

const Roadmap: React.FC<RoadmapProps> = () => {
  ////////////
  // RENDER //
  ////////////
  return (
    <div className={styles.Container}>
        <h2 className={styles.Title}>ROADMAP</h2>
    </div>
  );
};

export default Roadmap;