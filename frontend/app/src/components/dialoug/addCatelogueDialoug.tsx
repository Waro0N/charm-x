import { useEffect, useState } from "react";
import styles from "./catelogueDialoug.module.css";

interface AddCatelogueDialougProps {
  open: boolean;
  title: string;
  handleClose: () => void;
}

const AddCatelogueDialoug: React.FC<AddCatelogueDialougProps> = ({
  open,
  title,
  handleClose,
}) => {
  const [isOpen, setisOpen] = useState(open === true ? true : false);

  useEffect(() => {
    const checkOpen = () => {
      if (open) {
        setisOpen(true);
      } else {
        setisOpen(false);
      }
    };
    checkOpen();
  }, [open]);

  const dialougStyle = `div ${
    !isOpen ? styles.dialougNone : isOpen === true ? styles.dialougDisplay : ""
  }`;
  return (
    <div className={dialougStyle}>
      <div className={styles.itemContainer}>
        <div className={styles.headingContainer}>
          <h1>{title}</h1>
        </div>
        <div className={styles.formContainer}></div>

        <div className={styles.buttonContainer}>
          <button className={styles.CloseButton} onClick={handleClose}>
            Close
          </button>
          <button className={styles.NextButton}>Submit</button>
        </div>
      </div>
    </div>
  );
};

export default AddCatelogueDialoug;
