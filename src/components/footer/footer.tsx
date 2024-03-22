import React from "react";
import styles from "./style.module.css";

const Footer = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <p>
          mail:
          <a href="mailTo:llouismrc2@gmail.com"> llouismrc2@gmail.com</a>
        </p>
        <p>Tel: +509 31428456</p>
      </div>
      <div>
        <p>&copy; 2024 My Masha+ Company. All rights reserved.</p>
        <p>Designed with ❤️ by M/+ Team</p>
      </div>
    </div>
  );
};

export default Footer;
