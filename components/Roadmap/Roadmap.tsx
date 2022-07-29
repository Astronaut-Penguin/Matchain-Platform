// IMPORT REACT
import React from "react";

// Import Expandable Component
import { Collapse, Button } from "@blueprintjs/core";

// IMPORT STYLES
import styles from "./Roadmap.module.css";

type RoadmapProps = {
  style?: React.CSSProperties;
};

const Roadmap: React.FC<RoadmapProps> = () => {
  
  //Todo: Refactor this in an array of states
  const [isOpen, setIsOpen] = React.useState(false);
  const [isOpen2, setIsOpen2] = React.useState(false);
  const [isOpen3, setIsOpen3] = React.useState(false);
  const [isOpen4, setIsOpen4] = React.useState(false);
  const [isOpen5, setIsOpen5] = React.useState(false);
  const [isOpen6, setIsOpen6] = React.useState(false);
  const [isOpen7, setIsOpen7] = React.useState(false);
  const [isOpen8, setIsOpen8] = React.useState(false);
  const [isOpen9, setIsOpen9] = React.useState(false);
  const [isOpen10, setIsOpen10] = React.useState(false);


  ////////////
  // RENDER //
  ////////////

  //Todo: Refactor the roadmap items into a new components and map it, like the usual cards

  return (
    <>
    </>
  );
};

export default Roadmap;