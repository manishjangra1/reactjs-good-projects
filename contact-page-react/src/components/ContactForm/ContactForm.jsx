import styles from "./ContactForm.module.css";

import Button from "../Button/Button";
import { MdCall, MdEmail, MdMessage } from "react-icons/md";
const ContactForm = () => {
  const onSubmit = (event) => {
    event.preventDefault();
    console.log(event);
  };

  return (
    <section className={styles.container}>
      <div className={styles.contactForm}>
        <div className={styles.topButton}>
          <Button
            text="VIA SUPPORT CHAT"
            icon={<MdMessage fontSize="24px" />}
          />
          <Button text="VIA CALL" icon={<MdCall fontSize="24px" />} />
        </div>
        <div>
          <Button
            isOutlined={true}
            text="VIA EMAIL FORM"
            icon={<MdEmail fontSize="24px" />}
          />
        </div>

        <form onSubmit={onSubmit}>
          <div className={styles.formController}>
            <label htmlFor="name">Name</label>
            <input type="text" />
          </div>

          <div className={styles.formController}>
            <label htmlFor="email">E-Mail</label>
            <input type="email" name="email" />
          </div>

          <div className={styles.formController}>
            <label htmlFor="text">Text</label>
            <textarea
              name="text"
              rows="8"
              style={{
                resize: "none",
                fontSize: "16px",
                padding: "0 8px",
                width: "100%",
              }}
            />
          </div>
          <div style={{ display: "flex", justifyContent: "end" }}>
            <Button type="submit" text="SUBMIT BUTTON" />
          </div>
        </form>
      </div>
      <div className={styles.contactImage}>
        <img src="/images/service_24_7_pana_img1.svg" alt="service image" />
      </div>
      <div></div>
    </section>
  );
};

export default ContactForm;
