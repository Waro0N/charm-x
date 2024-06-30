import { useEffect, useState } from "react";
import styles from "./dialoug.module.css";

interface AddSupplierDialougBoxProps {
  title: string;
  open: boolean;
  handleClose: () => void;
  onSupplierSubmit: (
    supplierName: string,
    contact: string,
    categories: string[]
  ) => void;
}

const AddSupplierDialougBox: React.FC<AddSupplierDialougBoxProps> = ({
  title,
  open,
  handleClose,
  onSupplierSubmit,
}) => {
  const [isOpen, setisOpen] = useState(open === true ? true : false);
  const [categoryList, setCategoryList] = useState<string[]>([]);
  const [categoryValue, setCategoryValue] = useState<string>("");
  const [checkCategoryValue, setCheckCategoryValue] = useState(false);
  const [supplierName, setSupplierName] = useState("");
  const [supplierContact, setSupplierContact] = useState("");

  useEffect(() => {
    const checkOpen = () => {
      if (open) {
        setisOpen(true);
      } else {
        setisOpen(false);
      }
    };

    const checkcategoryValue = () => {
      setCategoryList(categoryList);
    };

    checkcategoryValue();
    checkOpen();
  }, [open, checkCategoryValue]);

  const resetFields = () => {
    setSupplierName("");
    setSupplierContact("");
    setCategoryValue("");
    setCategoryList([]);
  };

  const handleAddCategoryValue = () => {
    if (categoryValue.length >= 1) {
      setCategoryList((prevList) => [...prevList, categoryValue]);
    }
    setCategoryValue("");
  };

  const removeCategoryItem = (value: number) => {
    for (let i = 0; i < categoryList.length; i++) {
      if (i === value) {
        categoryList.splice(i, 1);
      }
    }
    setCheckCategoryValue(!checkCategoryValue);
    setCategoryList(categoryList);
  };

  const dialougStyle = `div ${
    !isOpen ? styles.dialougNone : isOpen === true ? styles.dialougDisplay : ""
  }`;
  return (
    <div className={dialougStyle}>
      <div className={styles.dialougContainer}>
        <div className={styles.headingContainer}>
          <h1>{title}</h1>
        </div>
        <div className={styles.formContainer}>
          <div className={styles.formRow}>
            <label>Supplier Name*:</label>
            <input
              onChange={(e) => setSupplierName(e.target.value)}
              placeholder="Supplier Name"
              required
              className={styles.SupplierInputs}
              type="text"
            />
            <label>Contact*:</label>
            <input
              onChange={(e) => setSupplierContact(e.target.value)}
              placeholder="Contact"
              required
              className={styles.SupplierInputs}
              type="text"
            />
          </div>
          <div className={styles.formRow}>
            <label>Add Categories*:</label>
            <input
              onChange={(e) => setCategoryValue(e.target.value)}
              placeholder="Category"
              required
              className={styles.SupplierInputs}
              type="text"
            />
            <span
              onClick={handleAddCategoryValue}
              style={{ cursor: "pointer" }}
              className="material-symbols-outlined"
            >
              add
            </span>
          </div>

          <div className={styles.categoryList}>
            {categoryList.length >= 1
              ? categoryList.map((value, idx) => (
                  <div key={idx} className={styles.list}>
                    <p className={styles.listText}>{value}</p>
                    <span
                      onClick={() => removeCategoryItem(idx)}
                      style={{
                        fontSize: "20px",
                        color: "grey",
                        cursor: "pointer",
                      }}
                      className="material-symbols-outlined"
                    >
                      close
                    </span>
                  </div>
                ))
              : ""}
          </div>
        </div>

        <div className={styles.buttonsContainer}>
          <button
            className={styles.CloseButton}
            onClick={() => {
              resetFields();
              setisOpen(false);
              handleClose();
            }}
          >
            Cancel
          </button>
          <button
            onClick={() => {
              onSupplierSubmit(supplierName, supplierContact, categoryList);
              setCategoryList([]);
            }}
            className={styles.NextButton}
          >
            <div className={styles.insideNextButton}>Submit</div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddSupplierDialougBox;
