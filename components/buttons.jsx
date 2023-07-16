import React from "react";
import styles from "./components.module.css";

export default function buttons() {
  return (
    <>
    <div>
    <div className={styles.buttonContainer}>
        <a
        target="_blank"
        rel="noreferrer"
          className={styles.buttonPrimary}
          href="https://github.com/JosephPR/next13-template"
        >
          Template Repo
        </a>
        <a 
        target="_blank"
        rel="noreferrer"
        className={styles.buttonSecondary}
         href="https://nextjs.org/">
          Next Js
        </a>
      </div>
      <div className={styles.buttonContainer}>
       
      </div>
    </div>
     
    </>
  );
}
