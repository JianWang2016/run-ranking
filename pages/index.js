import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Marathon Ranking | Home</title>
        <meta name="keywords" content="Ranking Marathon Finishing Time" />
      </Head>
      <div>
        <h1 className={styles.title}>Marathan Finish Time Ranking</h1>
        <p className={styles.text}>Dolore esse minim irure ex in fugiat pariatur laborum sunt aliquip. Dolore laboris exercitation incididunt reprehenderit anim cupidatat est excepteur exercitation voluptate. Labore eiusmod voluptate reprehenderit tempor exercitation. Anim amet veniam fugiat ad consectetur labore aliqua fugiat.</p>
        <p className={styles.text}>Occaecat deserunt eu id proident consectetur deserunt nostrud fugiat quis voluptate labore cillum. Commodo elit proident mollit sint culpa proident fugiat excepteur nisi nulla anim. Nostrud incididunt nulla reprehenderit officia amet sit elit cillum aliquip amet nostrud mollit. Nisi do enim tempor Lorem.</p>
        
        Please go to <Link className='linkover' href='/login'>Login</Link> page to sign in if you would like to edit your race information.

      </div>
    </>
  )
}
