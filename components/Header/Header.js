import React from 'react'
import styles from './Header.module.scss'

export const Header = () => {
  return <header className={styles.header}>
    <nav className='container'>
      <div className='logo'>
        <h2>Donar</h2>
      </div>
      <ul>
        <li>Nav 1</li>
        <li>Nav 2</li>
      </ul>
    </nav>
  </header>
}