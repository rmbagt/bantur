import { Link } from "react-router-dom";
import PageNav from "../components/PageNav";
import styles from "./Homepage.module.css";

export default function Homepage() {
  return (
    <main className={styles.homepage}>
      <PageNav />

      <section>
        <h1>
          Enjoy your journey in Bandung.
          <br />
          BanTur keeps track of your adventures.
        </h1>
        <h2>
          A map that organizes your traveling trip in Bandung City. No need to
          think about the right route and time to get around. Everything will be
          arranged by BanTur
        </h2>
        <Link to="/login" className="cta">
          Start explore now
        </Link>
      </section>
    </main>
  );
}
