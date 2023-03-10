import Head from 'next/head'
import { RaceCreateForm } from '../src/ui-components'
import { useState } from 'react';

// Initial setup instruction by Amplify studio
import { ThemeProvider } from "@aws-amplify/ui-react";
import { Amplify } from 'aws-amplify';
import awsmobile from '../src/aws-exports'
import "@aws-amplify/ui-react/styles.css";
import { studioTheme } from "../src/ui-components";
import { useRouter } from 'next/router';

Amplify.configure(awsmobile);
// End setup from amplify studio instruction for initial setup. 
// this shouldn't matter but just in case.

const Entry = () => {
  
  const [showForm, setShowForm] = useState(true)
  const router = useRouter()

  return (
    <>
      <Head>
      <title>Marathon Ranking | Join </title>
      <meta name="keywords" content="Ranking Marathon Finishing Time" />
      </Head>

      <div>

        {showForm && 
            <RaceCreateForm onSuccess={() => {
              setShowForm(false) // Hide the form
              router.push('/')
            }}/>
        }

      </div>

    </>
  )
}

export default Entry