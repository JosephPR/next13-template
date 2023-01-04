import React from "react";
import styles from "./components.module.css";

export default function buttons() {
  return (
    <>
    <div>
    <a
          className={styles.imageContainer}
          data-fancybox
          href="https://www.youtube.com/embed/Vq8HeDX3KYY"
        >
          <img
            className={styles.imagePopup}
            src="https://images.unsplash.com/photo-1494376877685-d3d2559d4f82?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
          />
        </a>

    </div>
     
    </>
  );
}
