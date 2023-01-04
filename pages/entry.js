import Head from 'next/head'
import { RaceCreateForm } from '../src/ui-components';

const Entry = () => {
  return (
    <>
      <Head>
      <title>Marathon Ranking | Join </title>
      <meta name="keywords" content="Ranking Marathon Finishing Time" />
      </Head>

      <div>

        <RaceCreateForm />

      </div>

    </>
  )
}

export default Entry