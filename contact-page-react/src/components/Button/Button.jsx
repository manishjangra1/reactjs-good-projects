import styles from "./Button.module.css";
const Button = ({ isOutlined, icon, text, ...rest }) => {
  return (
    <button
      {...rest}
      className={isOutlined ? styles.outlineButton : styles.primaryButton}
    >
      {icon}
      {text}
    </button>
  );
};

export default Button;
