"use client"

import Sidebar from '@/features/Sidebar/Sidebar';
import MainContent from '@/features/MainContent/MainContent';

import styles from './main.module.scss';

const Main = () => {
  return (
    <main className={styles.main}>
      <Sidebar />
      <MainContent />
    </main>
  )
}

export default Main
