import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
// import Navbar from '../components/Navbar'
// import Footer from '../components/Footer'
import { withSSRContext } from 'aws-amplify'
//https://react-data-table-component.netlify.app/?path=/story/getting-started-intro--page
import DataTable from 'react-data-table-component'

const inter = Inter({ subsets: ['latin'] })

// graphql api doesn't work
import { Amplify } from 'aws-amplify';
import awsmobile from '../src/aws-exports'
import { API } from '@aws-amplify/api'
Amplify.configure(awsmobile);
import { listRaces } from '../src/graphql/queries'
// after your imports
API.configure(awsmobile)



const columns = [
  {
    name: 'First Name',
    selector: row => row.firstName,
    sortable: true,
  },
  {
    name: 'Last Name',
    selector: row => row.lastName,
    sortable: true,
  },
  {
    name: 'Finish Hour',
    selector: row => row.finishHour,
    sortable: true,
  },
  {
    name: 'Minute',
    selector: row => row.finishMin,
    sortable: true,
  },
  {
    name: 'Second',
    selector: row => row.finishSec,
    sortable: true,
  },
  {
    name: 'Gender',
    selector: row => row.gender,
    sortable: true,
  },
  {
      name: 'Race Name',
      selector: row => row.raceName,
      sortable: true,
  }
];

export async function getServerSideProps () {
  const SSR = withSSRContext()
  const { data } = await SSR.API.graphql({ query: listRaces })
  return {
    props: {
      races: data.listRaces.items
    }
  }
}

export default function Home(races) {
  return (
    <>
      <Head>
        <title>Marathon Ranking | Home</title>
        <meta name="keywords" content="Ranking Marathon Finishing Time" />
      </Head>
      <div>
        <h1 className={styles.title}>Marathan Finish Time Ranking - All</h1>
        
        <div>
          results
        </div>

        <p className={styles.text}>
          Finishing times are provided by the runners and have not been independently verified at this time so please consider the ranking as tentative! 
          Please go to <Link className='linkover' href='/entry'>Join</Link> page if you would like to enter your race information. 
        </p>

      </div>
    </>
  )
}
