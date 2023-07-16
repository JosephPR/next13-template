import React from "react";
import styles from "./components.module.css";

export default function Hero({image, title, subtitle}){
return(
    <>
    <section className={styles.heroSection} style={{ 
    backgroundImage:`url(${image})`,
    backgroundRepeat:"no-repeat",
    backgroundSize:"100%", 
    height:"85vh"
 
  }}>
    <div className={styles.heroContent}>
    <h1>{title}</h1>
        {/* <span>{subtitle}</span> */}
    </div>
      
    </section>
    </>
)

}