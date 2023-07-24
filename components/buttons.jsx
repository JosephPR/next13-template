import React from "react";
import styles from "./components.module.css";

export default function buttons({link1, link2 }) {
  return (
    <>
    <div>
    <div className={styles.buttonContainer}>
        <a
        target="_blank"
        rel="noreferrer"
          className={styles.buttonPrimary}
          href={link1}
        >
          Template Repo
        </a>
        <a 
        target="_blank"
        rel="noreferrer"
        className={styles.buttonSecondary}
         href={link2}>
          Next Js
        </a>
      </div>
      <div className={styles.buttonContainer}>
       
      </div>
    </div>
     
    </>
  );
}
