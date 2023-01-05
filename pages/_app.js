import Layout from '../components/Layout'
import '../styles/globals.css'

// Initial setup instruction by Amplify studio
import { ThemeProvider } from "@aws-amplify/ui-react";
import { Amplify } from 'aws-amplify';
import awsmobile from '../src/aws-exports'
import "@aws-amplify/ui-react/styles.css";
import { studioTheme } from "../src/ui-components";
import { API } from '@aws-amplify/api'

Amplify.configure(awsmobile);

// End setup

function App({ Component, pageProps }) {
  return (
      <Layout>
        <ThemeProvider theme={studioTheme}>
          <Component {...pageProps} />
        </ThemeProvider>
      </Layout>

  )
}

export default App