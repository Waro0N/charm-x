import styles from "./dashboard.module.css";
import SummaryCard from "../summaryCard/summaryCard";

const Dashboard = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.header}>
          <h1>dashbaord</h1>
        </div>
        <div className={styles.summaryContainer}>
          <div className={styles.cardsItems}>
            <SummaryCard color="red" amount={"1000"} text={"Total Sales"} />
            <SummaryCard color="blue" amount={"1000"} text={"Total Sales"} />
            <SummaryCard color="pink" amount={"1000"} text={"Total Sales"} />
            <SummaryCard color="brown" amount={"1000"} text={"Total Sales"} />
          </div>
          <div className={styles.graphItem}>sdasd</div>
        </div>
        <div className={styles.revenueContainer}>sss</div>
        <div className={styles.topProductContainer}>sss</div>
      </div>
    </>
  );
};

export default Dashboard;
