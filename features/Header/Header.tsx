import React from 'react'

import Button from '@/components/Button/Button'

import styles from './header.module.scss';

const Header = () => {
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>Order #1345</h1>
      <div className={styles.actions}>
      <Button variant="primary">
        Send
      </Button>
      </div>
    </header>
  )
}

export default Header
