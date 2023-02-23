import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <main>
      <h1>Test 1</h1>
      <h2>Test 2</h2>
      <h3 className={styles.red}>Red</h3>
      <h3 className='blue'>Blue</h3>
      <h3 className='green'>Green</h3>
    </main>
  )
}
