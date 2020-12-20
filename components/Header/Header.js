import Image from 'next/image'
import React, { useState } from 'react'
import styles from './Header.module.scss'
import { FiMenu as Menu } from "react-icons/fi"

const links = [
  {
    label: 'Como funciona',
    link: '#como-funciona'
  },
  {
    label: '¿Puedo donar?',
    link: '#puedo-donar'
  },
  {
    label: 'Descarga',
    link: '#descarga'
  },
]

export const Header = () => {
  const [show, setShow] = useState()

  return <header className={styles.header}>
    <nav className='container'>
      <Image src="/Donar.svg" width="110" height="30" alt="Donar logo" />
      <button className={styles.burgerIcon} onClick={() => setShow(!show)}>
        <Menu size='20' />
      </button>
      <ul className={show ? styles.active : ''}>
        {links.map(({ label, link }) => (<li key={link} onClick={() => setShow(false)}>
          <a href={link} className='cocogoose'>{label}</a>
        </li>))}
      </ul>
    </nav>
  </header>
}