import { Header, Footer } from '../components'
import '../styles/globals.scss'

function MyApp({ Component, pageProps }) {
  return <div>
    <Header />
    <Component {...pageProps} />
    <Footer />
  </div>
}

export default MyApp
