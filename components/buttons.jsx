import React from 'react'
import styles from './components.module.css'

export default function buttons() {
  return (
    <div className={styles.buttonContainer}>
        <a className={styles.buttonPrimary} href="">Learn more</a>
        <a className={styles.buttonSecondary} href="">Secondary</a>
    </div>
  )
}
