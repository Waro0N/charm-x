import { useEffect, useState } from "react";
import AddSupplierDialougBox from "../dialoug/addSupplierDialougBox";
import styles from "./supplier.module.css";
import TabButton from "./tabButton";
import CatelogueCard from "./component/catelogueCard";
import AddCatelogueDialoug from "../dialoug/addCatelogueDialoug";

interface SupplierDataInterface {
  id: number;
  name: string;
  contact: string;
}
interface SupplierProps {
  onSupplierTabClick: (value: number) => void;
  onSupplierSubmit: (
    supplierName: string,
    contact: string,
    categories: string[]
  ) => void;
  supplierData?: SupplierDataInterface;
}

const Supplier: React.FC<SupplierProps> = ({
  onSupplierTabClick,
  onSupplierSubmit,
  supplierData,
}) => {
  const [openSupplierDialoug, setOpenSupplierDialoug] = useState(false);
  const [openCatelougDialoug, setOpenCatelougDialoug] = useState(false);
  const [tabName, setTabName] = useState<SupplierDataInterface[]>();
  const [catelogueItems, setcatelogueItems] = useState([]);
  const [activeID, setActiveID] = useState(0);

  console.log(supplierData);
  useEffect(() => {
    if (supplierData && Array.isArray(supplierData)) {
      setTabName(supplierData);
      setActiveID(supplierData[0].id);
    }
  }, [supplierData]);

  const handleAddSupplier = () => {
    setOpenSupplierDialoug(true);
  };

  const closeSupplierDialoug = () => {
    setOpenSupplierDialoug(false);
  };

  const handleCatelougDialoug = () => {
    setOpenCatelougDialoug(true);
  };

  const closeCatelougDialoug = () => {
    setOpenCatelougDialoug(false);
  };

  return (
    <>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2>Suppliers</h2>
        </div>
        <div className={styles.addSupplierContaienr}>
          <button onClick={handleAddSupplier} className={styles.supplierButton}>
            <div className={styles.buttonItems}>
              <span className="material-symbols-outlined">add_circle</span>
              <span>Add Supplier</span>
            </div>
          </button>
        </div>

        <div className={styles.supplierTabContainer}>
          <div className={styles.tabs}>
            {tabName &&
              tabName.map((value, idx) => (
                <div key={idx}>
                  <TabButton
                    onClick={() => {
                      setActiveID(value.id);
                      onSupplierTabClick(value.id);
                    }}
                    isActive={value.id === activeID}
                    tabName={value.name}
                  />
                </div>
              ))}

            <span
              onClick={handleAddSupplier}
              style={{ cursor: "pointer" }}
              className="material-symbols-outlined"
            >
              add_circle
            </span>
          </div>
          {catelogueItems.length >= 1 ? (
            <div className={styles.supplierItems}>
              {catelogueItems &&
                catelogueItems.map((value, idx) => <CatelogueCard />)}
            </div>
          ) : (
            <div className={styles.noItems}>
              <div className={styles.noItemTextContainer}>
                <span
                  style={{ fontSize: "40px", color: "red" }}
                  className="material-symbols-outlined"
                >
                  sentiment_very_dissatisfied
                </span>
                <span className={styles.noItemText}>No items Available</span>
              </div>
              <button
                onClick={handleCatelougDialoug}
                className={styles.supplierButton}
              >
                <div className={styles.buttonItems}>
                  <span className="material-symbols-outlined">add_circle</span>
                  <span>Add Catelouge</span>
                </div>
              </button>
            </div>
          )}
        </div>
      </div>
      <AddSupplierDialougBox
        onSupplierSubmit={onSupplierSubmit}
        handleClose={closeSupplierDialoug}
        open={openSupplierDialoug}
        title="Please Fill Details to add Supplier"
      />
      <AddCatelogueDialoug
        handleClose={closeCatelougDialoug}
        open={openCatelougDialoug}
        title="Please add Cateloug"
      />
    </>
  );
};

export default Supplier;
