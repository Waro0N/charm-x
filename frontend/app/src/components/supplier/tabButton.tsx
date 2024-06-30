import { useState } from "react";
import styles from "./supplier.module.css";

interface ButtonProps {
  tabName: string;
  onClick: () => void;
  isActive: boolean;
}

const TabButton: React.FC<ButtonProps> = ({ tabName, onClick, isActive }) => {
  const buttonClass = `button ${
    isActive ? styles.ActiveTab : styles.TabButton
  }`;

  return (
    <button
      onClick={() => {
        onClick();
      }}
      className={buttonClass}
    >
      {tabName}
    </button>
  );
};

export default TabButton;
