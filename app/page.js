import React from "react";
import Buttons from "../components/buttons";
import styles from "./home.module.css";
import Popup from "../components/popup"

export default function Home() {
  return (
    <>
    <section className={styles.homeContainer}>
      <div>
      <h1>This is a Template that uses the new app directory (Still in Beta) for Next 13</h1>
      <p className={styles.content}>
        In Next.js 13, they announced the new app directory (beta). This new
        routing and data fetching system can be incrementally adopted alongside
        your existing pages directory. The app directory provides many benefits,
        including enhanced layouts, co-location of components, tests, and
        styles, component-level data fetching, and more.{" "}
      </p>
      <Buttons />
      </div>
 
     <Popup />

    </section>
  
    </>
  );
}
