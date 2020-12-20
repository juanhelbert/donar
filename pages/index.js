import Head from 'next/head'
import styles from '../styles/Home.module.scss'
import { Introduction } from '../components'
import { fetchEntries } from '../services/getData'

export default function Home({ introduction }) {
  return (
    <>
      <Head>
        <title>Donar</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.home + ' container'}>
        <Introduction data={introduction} />
      </main>

    </>
  )
}

export async function getStaticProps() {
  const introduction = (await fetchEntries('introduction'))?.[0]?.fields || null

  return {
    props: {
      introduction
    },
  }
}
