import styles from "./sideButton.module.css";

interface SideButtonProps {
  children: React.ReactNode;
  buttonActive: boolean;
  onClick: () => void;
}

const SideButton: React.FC<SideButtonProps> = ({
  children,
  buttonActive,
  onClick,
}) => {
  const buttonClass = `button ${
    !buttonActive ? styles.itemButtons : styles.activeButton
  }`;
  return (
    <button onClick={onClick} className={buttonClass}>
      {children}
    </button>
  );
};

export default SideButton;
