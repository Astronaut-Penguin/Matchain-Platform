// REACT
import React from "react";

// STYLES
import styles from "./BlueButton.module.css";

type BlueButtonProps = {
  style?: React.CSSProperties;
  text: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>
};

const BlueButton: React.FC<BlueButtonProps> = ({ text, onClick }) => {
  ////////////
  // RENDER //
  ////////////
  return (
    <>
    </>
  );
};

export default BlueButton;