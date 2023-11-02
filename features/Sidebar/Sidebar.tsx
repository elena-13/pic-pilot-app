import React from 'react'

import Button from '@/components/Button/Button'

import styles from './sidebar.module.scss';

const Sidebar = () => {
  return (
    <aside className={styles.container}>
      <div className={styles.header}>
        <h3>Preset</h3>
        <span>Small Portrait</span>
      </div>
      <div className={styles.main}>
        <div>
          <h3>Clarity of Details</h3>
          <span>5</span>
        </div>
        <div>
          <h3>Importance/Main Details</h3>
          <span>5</span>
        </div>
        <div>
          <h3>Small Details</h3>
          <span>5</span>
        </div>
        <div>
          <h3>Palette</h3>
          <span>Simple</span>
        </div>
      </div>
      <div className={styles.bottom}>
        <Button type="button" variant="secondary">Apply</Button>
      </div>
    </aside>
  )
}

export default Sidebar
