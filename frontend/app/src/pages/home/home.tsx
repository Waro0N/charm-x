import styles from "./home.module.css";
import CartBar from "../../components/cartBar/cartBar";
import NavBar from "../../components/navBar/navBar";
import smartImg from "../../assets/images/smart.jpg";
import elegantImg from "../../assets/images/elegant.jpeg";
import NewArrivalCard from "../../components/newArrivalCard/newArrivalCard";
import Footer from "../../components/footer/footer";

const Home = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.header}>
          <CartBar />
          <NavBar />
        </div>
        <div className={styles.itemPics}>
          <div className={styles.smart}>
            <img src={smartImg} height={"491px"} width={"471px"} />
            <div className={styles.smartText}>
              <h1>SULTRY & SMART</h1>
              <span>HOT SPRING LOOKS</span>
            </div>
          </div>

          <div className={styles.elegant}>
            <div className={styles.elegantContainer}>
              <div className={styles.elegantText}>
                <h1 className={styles.elegantHeading}>ELEGANT & SLICK</h1>
                <span className={styles.elegantHeading}>
                  GET READY FOR SUMMER
                </span>
              </div>
              <img src={elegantImg} height={"491px"} width={"471px"} />
            </div>
          </div>
        </div>
        <div className={styles.arrivalContainer}>
          <div className={styles.ArrivalHeading}>
            <h2>NEW ARRIVALS</h2>
          </div>
          <div className={styles.arrivalItems}>
            <div className={styles.cards}>
              <NewArrivalCard />
            </div>
            <div className={styles.cards}>
              <NewArrivalCard />
            </div>
            <div className={styles.cards}>
              <NewArrivalCard />
            </div>
          </div>
        </div>

        <div className={styles.salesContainer}>
          <div className={styles.salesItem}>
            <p className={styles.offerHeading}>Limited Time offer</p>

            <div className={styles.salesImage}>
              <img
                className={styles.imageStyle}
                src={smartImg}
                width={"542px"}
                height={"698px"}
              />
            </div>
            <div className={styles.purchaseContent}>
              <p className={styles.purchaseheading}>
                Get 20% off on Your First Purchase
              </p>
              <p className={styles.purchaseText}>
                Looking for the perfect T-shirt? Look no further than Charm-X!
                We're offering 20% off our new collection for a limited time
                only. Our premium quality T-shirts are expertly crafted to fit
                well, last long and look great. Don't miss out on this amazing
                deal - shop now and experience the Charm-X difference.
              </p>
            </div>
          </div>
        </div>
        <div className={styles.footer}>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Home;
