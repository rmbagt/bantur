import { Link } from "react-router-dom";
import styles from "./Logo.module.css";

function Logo() {
  return (
    <Link to="/">
      <img
        src="/logo.png"
        alt="BanTur logo"
        className={styles.logo}
        style={{ height: "50px" }}
      />
    </Link>
  );
}

export default Logo;
