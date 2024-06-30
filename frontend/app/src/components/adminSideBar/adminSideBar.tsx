import styles from "./adminSideBar.module.css";
import BrandLogo from "../../assets/images/logos/brandLogo.png";
import SideButton from "../SideButton/SideButton";
// library imports
import { useEffect, useState } from "react";

interface AdminSideBarProps {
  handleSideButton: (value: number) => void;
  cleanHref: string;
}
const AdminSideBar: React.FC<AdminSideBarProps> = ({
  handleSideButton,
  cleanHref,
}) => {
  const [dashboardActive, setDashboardActive] = useState(false);
  const [inventoryDumpActive, setInventoryDumpActive] = useState(false);
  const [liveProductsActive, setliveProductsActive] = useState(false);
  const [ordersActive, setOrdersActive] = useState(false);
  const [reportsActive, setReportsActive] = useState(false);
  const [logoutActive, setLogoutActive] = useState(false);

  useEffect(() => {
    if (cleanHref === undefined || cleanHref === null || cleanHref === "") {
      setDashboardActive(true);
      setInventoryDumpActive(false);
      setOrdersActive(false);
      setReportsActive(false);
      setliveProductsActive(false);
    } else if (cleanHref === "inventory") {
      setDashboardActive(false);
      setInventoryDumpActive(true);
      setOrdersActive(false);
      setReportsActive(false);
      setliveProductsActive(false);
    } else if (cleanHref === "products") {
      setDashboardActive(false);
      setInventoryDumpActive(false);
      setOrdersActive(false);
      setReportsActive(false);
      setliveProductsActive(true);
    } else if (cleanHref === "orders") {
      setDashboardActive(false);
      setInventoryDumpActive(false);
      setOrdersActive(true);
      setReportsActive(false);
      setliveProductsActive(false);
    } else if (cleanHref === "suppliers") {
      setDashboardActive(false);
      setInventoryDumpActive(false);
      setOrdersActive(false);
      setReportsActive(true);
      setliveProductsActive(false);
    } else {
      setLogoutActive(false);
    }
  }, [cleanHref]);

  return (
    <>
      <div className={styles.container}>
        <div className={styles.logo}>
          <img src={BrandLogo} height={"200px"} width={"200px"} />
        </div>
        <div className={styles.sideBarButtons}>
          <div className={styles.dashboardButtonContainer}>
            <SideButton
              onClick={() => handleSideButton(1)}
              buttonActive={dashboardActive}
            >
              <div className={styles.buttonWrapper}>
                <span className="material-symbols-outlined">
                  bar_chart_4_bars
                </span>
                <span className={styles.buttonText}>Dashboard</span>
              </div>
            </SideButton>
          </div>
          <div className={styles.InventoryButtonContainer}>
            <SideButton
              onClick={() => handleSideButton(2)}
              buttonActive={inventoryDumpActive}
            >
              <div className={styles.buttonWrapper}>
                <span className="material-symbols-outlined">inventory_2</span>
                <span className={styles.buttonText}>Inventory Dump</span>
              </div>
            </SideButton>
          </div>
          <div className={styles.ProductButtonContainer}>
            <SideButton
              onClick={() => handleSideButton(3)}
              buttonActive={liveProductsActive}
            >
              <div className={styles.buttonWrapper}>
                <span className="material-symbols-outlined">inventory</span>
                <span className={styles.buttonText}>Live Products</span>
              </div>
            </SideButton>
          </div>
          <div className={styles.ordersButtonContainer}>
            <SideButton
              onClick={() => handleSideButton(4)}
              buttonActive={ordersActive}
            >
              <div className={styles.buttonWrapper}>
                <span className="material-symbols-outlined">list_alt</span>
                <span className={styles.buttonText}>Orders</span>
              </div>
            </SideButton>
          </div>
          <div className={styles.reportsButtonContainer}>
            <SideButton
              onClick={() => handleSideButton(5)}
              buttonActive={reportsActive}
            >
              <div className={styles.buttonWrapper}>
                <span className="material-symbols-outlined">
                  local_shipping
                </span>
                <span className={styles.buttonText}>Suppliers</span>
              </div>
            </SideButton>
          </div>
          <div className={styles.signoutButtonContainer}>
            <SideButton
              onClick={() => handleSideButton(6)}
              buttonActive={logoutActive}
            >
              <div className={styles.buttonWrapper}>
                <span className="material-symbols-outlined">logout</span>
                <span className={styles.buttonText}>Log out</span>
              </div>
            </SideButton>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminSideBar;
