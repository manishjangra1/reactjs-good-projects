import styles from './Header.module.css'
const Header = () => {
  return (
    <div className={`${styles.container} ${styles.responsive}`}>
      <h1 className="font-pacifico md:text-xl lg:text-2xl md:font-bold lg:font-extrabold">
        Manish Jangra
      </h1>

      <div>
        <ul className={`${styles.listItems} ${styles.responsiveListItems}`}>
          <li>Home</li>
          <li>About</li>
          <li>Projects</li>
          <li>Blog</li>
          <li>Contact</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
