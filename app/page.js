import React from "react";
import Buttons from "../components/buttons";
import styles from "./home.module.css";
import Popup from "../components/popup"
import Hero from "../components/hero";

export default function Home() {
  return (
    <>
    <Hero
     image="https://images.unsplash.com/photo-1688372469090-ba5303aa4303?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
     title="Momentum Innovations"
    //  subtitle="Catchy little phrase"
     />
    <section className={styles.homeContainer}>
      <div>
      <h2>This is a Template that uses the new app directory (Still in Beta) for Next 13</h2>
      <p className={styles.content}>
        In Next.js 13, they announced the new app directory. This new
        routing and data fetching system can be incrementally adopted alongside
        your existing pages directory. The app directory provides many benefits,
        including enhanced layouts, co-location of components, tests, and
        styles, component-level data fetching, and more.{" "}
      </p>
      <Buttons link1="https://github.com/JosephPR/next13-template" link2="https://nextjs.org/" />
      </div>
 
     <Popup
      popupVideo="https://www.youtube.com/embed/Vq8HeDX3KYY"
      imageUrl="https://images.unsplash.com/photo-1688372469090-ba5303aa4303?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
      />

    </section>
  
    </>
  );
}
