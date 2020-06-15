import React from "react"
import styles from './layout.module.css';

export default function Layout({ children }) {
  return (
    <div className={styles.layoutContainer} style={{ margin: `3rem auto`, maxWidth: 650, padding: `0 1rem` }}>
      {children}
    </div>
  )
}
