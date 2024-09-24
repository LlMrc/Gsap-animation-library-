import styles from "./style.module.css";

const Footer = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <p>
          mail:
          <a href="mailTo:llouismrc2@gmail.com"> llouismrc2@gmail.com</a>
        </p>
        <p>
          Call me at:
          <a href="tel: +509 31428456"> +509 31428456</a>
        </p>
      </div>

      <div>
        <p>Visit us 🌐</p>
        <a className={styles.web_link}
          href="https://lml-creative.vercel.app/">codegroove.com</a>
      </div>


      <div>
        <p>&copy; 2024 My Masha+ Company. All rights reserved.</p>
        <p>Designed with ❤️ by M/+ Team</p>
      </div>
    </div>
  );
};

export default Footer;
