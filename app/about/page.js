import React from "react";
import Buttons from "../../components/buttons";
import styles from "./../home.module.css";
import Popup from "../../components/popup"
import Hero from "../../components/hero";

export default function About() {
  return (
    <>
     <Hero
     image="https://images.unsplash.com/photo-1684660134001-872d0443f305?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
     title="About Us"
    //  subtitle="Catchy little phrase"
     />
    <section className={styles.homeContainer}>
    <Popup
    popupVideo="https://youtu.be/WLkIYxhzoUc"
    imageUrl="https://images.unsplash.com/photo-1688399014730-86300f19fbb3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1332&q=80"
    />

      <div>
      <h2>This is the About Page route</h2>
      <p className={styles.content}>
        In Next.js 13, they announced the new app directory (beta). This new
        routing and data fetching system can be incrementally adopted alongside
        your existing pages directory. The app directory provides many benefits,
        including enhanced layouts, co-location of components, tests, and
        styles, component-level data fetching, and more.{" "}
      </p>
      </div>

    </section>
  
    </>
  );
}
