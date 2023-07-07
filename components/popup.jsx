import React from "react";
import styles from "./components.module.css";

export default function buttons({popupVideo, imageUrl}) {
  return (
    <>
    <div className={styles.popupSection}>
      <img className={styles.playButtonIcon} src="https://img.freepik.com/premium-vector/play-button-icon-symbol-transparent-background-video-audio-player-vector-illustration_350225-118.jpg?w=2000" alt="play-button-icon"/>
    <a
          className={styles.imageContainer}
          data-fancybox
          href={popupVideo}
        >
          <img
            className={styles.imagePopup}
            src={imageUrl}
          />
                <img className={styles.playButtonIcon} src="https://img.freepik.com/premium-vector/play-button-icon-symbol-transparent-background-video-audio-player-vector-illustration_350225-118.jpg?w=2000" alt="play-button-icon"/>

        </a>

    </div>
     
    </>
  );
}
