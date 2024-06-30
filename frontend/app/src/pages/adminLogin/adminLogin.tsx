import styles from "./adminLogin.module.css";

const AdminLogin = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.loginContainer}>
          <div className={styles.Content}>
            <div className={styles.heading}>
              <h1>Login</h1>
            </div>
            <div className={styles.WelcomeText}>
              <span>Hi, Welcome Back</span>
            </div>
            <div className={styles.inputFields}>
              <label className={styles.label}>Username: </label>
              <input
                className={styles.inputs}
                type="text"
                placeholder="Your Name"
              />
              <label className={styles.label}>Password: </label>
              <input
                className={styles.inputs}
                type="password"
                placeholder="Your Password"
              />
            </div>
            <div className={styles.loginButtonContainer}>
              <button className={styles.loginButton}>
                <div className={styles.insideButton}>
                  <span className="material-symbols-outlined">login</span>
                  <span>Login</span>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminLogin;
