import styles from "./Navigation.module.css";
const Navigation = () => {
  return (
    <nav className={`${styles.nav} container`}>
      <div className={styles.logo}>
        <img src="/images/logo.jpg" alt="logo" />
      </div>
      <ul className="">
        <li>HOME</li>
        <li>ABOUT</li>
        <li>CONTACT</li>
      </ul>
    </nav>
  );
};

export default Navigation;
