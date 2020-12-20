import Head from 'next/head'
import '../styles/globals.scss'
import { Header, Footer } from '../components'

function MyApp({ Component, pageProps }) {
  return <div>
    <Head>
      <link
        rel='preload'
        href='/fonts/Cocogoose/Cocogoose-regular.ttf'
        as='font'
        crossOrigin=''
      />
      <link
        rel='preload'
        href='/fonts/Cocogoose/Cocogoose-bold.ttf'
        as='font'
        crossOrigin=''
      />
      <link
        rel='preload'
        href='/fonts/Helvetica/Helvetica.ttf'
        as='font'
        crossOrigin=''
      />
    </Head>
    <Header />
    <Component {...pageProps} />
    <Footer />
  </div>
}

export default MyApp
