// REACT
import React from "react";

// STYLES
import styles from "./TeamCard.module.css";

//Next image
import Image, { StaticImageData } from "next/image";

type TeamCardProps = {
  style?: React.CSSProperties;
  name: string;
  job: string;
  image: StaticImageData;
};

const TeamCard: React.FC<TeamCardProps> = ({ name, job, image }) => {
  ////////////
  // RENDER //
  ////////////
  return (
    <>
    </>
  );
};

export default TeamCard;