import styles from "./summryCard.module.css";

interface SummryCardProps {
  icon?: React.ReactNode;
  color: string;
  amount: string;
  text: string;
}

const SummaryCard: React.FC<SummryCardProps> = ({
  icon,
  color,
  amount,
  text,
}) => {
  return (
    <>
      <div style={{ backgroundColor: color }} className={styles.card}>
        <div>{icon}</div>
        <div>{amount}</div>
        <div>{text}</div>
      </div>
    </>
  );
};

export default SummaryCard;
