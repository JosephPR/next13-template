import React from "react";
import styles from "./components.module.css";

export default function buttons({popupVideo, imageUrl}) {
  return (
    <>
    <div>
    <a
          className={styles.imageContainer}
          data-fancybox
          href={popupVideo}
        >
          <img
            className={styles.imagePopup}
            src={imageUrl}
          />
        </a>

    </div>
     
    </>
  );
}
