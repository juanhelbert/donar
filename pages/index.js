import Head from 'next/head'
import styles from '../styles/Home.module.scss'
import { fetchEntries } from '../services/getData'
import { Introduction, HowItWorks } from '../components'

export default function Home({ introduction, functionalities }) {
  return (
    <>
      <Head>
        <title>Donar</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.home + ' container'}>
        <Introduction data={introduction} />
        <HowItWorks data={functionalities} />
      </main>

    </>
  )
}

export async function getServerSideProps() {
  const introduction = (await fetchEntries('introduction'))?.[0]?.fields || null
  const functionalities = (await fetchEntries('functionality')) || null

  return {
    props: {
      introduction,
      functionalities
    },
  }
}
