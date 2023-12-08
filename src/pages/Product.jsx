import PageNav from "../components/PageNav";
import styles from "./Product.module.css";

export default function Product() {
  return (
    <main className={styles.product}>
      <PageNav />

      <section>
        <img
          src="img-1.jpg"
          alt="braga street bandung"
          style={{ height: "260px", borderRadius: "10px" }}
        />
        <div>
          <h2>About Bantur.</h2>
          <p>
            Introducing Bandung City Tour—a meticulously crafted itinerary
            designed to showcase the city highlights. Our product, accessible
            through a user-friendly website, caters to diverse devices, ensuring
            seamless access for all.
          </p>
          <p>
            Offering a comprehensive guide to Bandung tourist attractions, our
            product not only highlights key locations but also provides
            directions and tour routes throughout the city. At Bandung City
            Tour, we are committed to enhancing your travel experience and
            making your exploration of Bandung a memorable journey.
          </p>
        </div>
      </section>
    </main>
  );
}
