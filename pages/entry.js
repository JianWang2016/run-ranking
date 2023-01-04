import Head from 'next/head'
import { RaceCreateForm } from '../src/ui-components';

// Initial setup instruction by Amplify studio
import { ThemeProvider } from "@aws-amplify/ui-react";
import { Amplify } from 'aws-amplify';
import awsconfig from '../src/aws-exports'
import "@aws-amplify/ui-react/styles.css";
import { studioTheme } from "../src/ui-components";

Amplify.configure(awsconfig);
// End setup

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