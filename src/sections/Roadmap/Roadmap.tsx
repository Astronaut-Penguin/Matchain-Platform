// IMPORT REACT
import React from "react";

// Import Expandable Component
import "@blueprintjs/core/lib/css/blueprint.css";
import { Collapse, Button } from "@blueprintjs/core";

// IMPORT STYLES
import styles from "./Roadmap.module.css";

type RoadmapProps = {
  style?: React.CSSProperties;
};

const Roadmap: React.FC<RoadmapProps> = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  ////////////
  // RENDER //
  ////////////
  return (
    <div className={styles.Container}>
        <h2 className={styles.Title}>ROADMAP</h2>

        <div className={styles.RoadMapContainer}>
            <div className={styles.Item} style={{ marginTop: "0" }}>
            <div className={styles.Ball} />
                <a onClick={() => setIsOpen(!isOpen)} className={styles.Button}>
                    LOREM
                    <Collapse isOpen={isOpen}>
                        <ol className={styles.List}>
                            <li>
                                Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet
                            </li>
                        </ol>
                    </Collapse>
                </a>
            </div>

            <div className={styles.Item}>
                <div className={styles.Ball} />
                <p className={styles.Button}>LOREM</p>
            </div>

            <div className={styles.Item}>
                <div className={styles.Ball} />
                <p className={styles.Button}>LOREM</p>
            </div>

            <div className={styles.Item} style={{ marginBottom: "0" }}>
                <div className={styles.Ball} />
                <p className={styles.Button}>LOREM</p>
            </div>
        </div>
    </div>
  );
};

export default Roadmap;