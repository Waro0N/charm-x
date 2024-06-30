import styles from "./adminDashboard.module.css";
import AdminSideBar from "../../components/adminSideBar/adminSideBar";
import Dashboard from "../../components/dashboard/dashboard";
import Inventory from "../../components/inventory/inventory";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Supplier from "../../components/supplier/supplier";

import axios from "axios";
interface SupplierDataInterface {
  id: number;
  name: string;
  contact: string;
}

const AdminDashboard = () => {
  const location = useLocation();
  const [urlHash, setUrlHash] = useState(location.pathname);
  const cleanedUrl = urlHash.split("#");
  const clean = cleanedUrl[1];

  const url = location.pathname;

  const [supplierData, setSupplierData] = useState<SupplierDataInterface>();

  const getSuppliers = () => {
    axios
      .get("http://127.0.0.1:8000/supplier/getSuppliers/")
      .then((res) => setSupplierData(res.data))
      .catch((e) => console.log(e));
  };
  useEffect(() => {
    getSuppliers();
  }, []);

  const getCatelouge = (value: number) => {
    console.log(value);
  };

  const handleAddSupplier = (
    name: string,
    contact: string,
    categories: string[]
  ) => {
    const payload = {
      name: name,
      contact: contact,
      categories: categories,
    };
    axios
      .post("http://127.0.0.1:8000/supplier/createSupplier/", payload)
      .then((res) => {
        console.log(res);
      });
  };

  const handleSideButton = (value: number) => {
    console.log(value);
    if (value === 1) {
      window.location.href = "/admin/dashboard";
    } else if (value === 2) {
      const newUrl = `${window.location.origin}${url}/#inventory`;
      window.history.pushState({ path: newUrl }, "", newUrl);
      setUrlHash(newUrl);
    } else if (value === 3) {
      const newUrl = `${window.location.origin}${url}/#products`;
      window.history.pushState({ path: newUrl }, "", newUrl);
      setUrlHash(newUrl);
    } else if (value === 4) {
      const newUrl = `${window.location.origin}${url}/#orders`;
      window.history.pushState({ path: newUrl }, "", newUrl);
      setUrlHash(newUrl);
    } else if (value === 5) {
      const newUrl = `${window.location.origin}${url}/#suppliers`;
      window.history.pushState({ path: newUrl }, "", newUrl);
      setUrlHash(newUrl);
    }
  };

  return (
    <>
      <div className={styles.container}>
        <div className={styles.itemSideBar}>
          <AdminSideBar cleanHref={clean} handleSideButton={handleSideButton} />
        </div>
        <div className={styles.itemAnalyticsContainer}>
          {clean === undefined || clean === null || clean === "" ? (
            <Dashboard />
          ) : clean === "suppliers" ? (
            <Supplier
              supplierData={supplierData}
              onSupplierSubmit={handleAddSupplier}
              onSupplierTabClick={(value) => getCatelouge(value)}
            />
          ) : (
            <Inventory />
          )}
        </div>
      </div>
    </>
  );
};

export default AdminDashboard;
