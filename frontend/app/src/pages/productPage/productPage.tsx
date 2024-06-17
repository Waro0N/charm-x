import styles from "./product.module.css";
import CartBar from "../../components/cartBar/cartBar";
import NavBar from "../../components/navBar/navBar";
import productImg from "../../components/newArrivalCard/newarrivalmodel.png";
import Footer from "../../components/footer/footer";

const ProductPage = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.header}>
          <CartBar />
          <NavBar />
        </div>
        <div className={styles.crumBar}>Home/Product</div>
        <div className={styles.productContainer}>
          <div className={styles.productImage}>
            <img src={productImg} height={"500px"} width={"500px"} />
          </div>
          <div className={styles.productDetails}>
            <div className={styles.productName}>
              <span className={styles.productTextSize}>Tshirt</span>
              <span className={styles.productTextSize}>Rs. 49</span>
            </div>
            <div className={styles.selectSize}>
              <div className={styles.fieldContent}>
                <label>Size</label>
                <input className={styles.selectSizeField} type="text" />
              </div>
              <div className={styles.fieldContent}>
                <label>Quantity</label>
                <input className={styles.selectQuantity} type="number" />
              </div>
            </div>
            <div className={styles.buttons}>
              <div className={styles.addtoCartContainer}>
                <button className={styles.addToCartButton}>Add to Cart</button>
                <button className={styles.likeButton}>
                  <span
                    style={{ color: "#bdd7d0" }}
                    className="material-symbols-outlined"
                  >
                    favorite
                  </span>
                </button>
              </div>
              <div>
                <button className={styles.buyButton}>Buy Now</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
};

export default ProductPage;
