import type { NextPage } from 'next'
import Matheus from '../components/Matheus'
import Infos from '../components/Infos'
import Portfolio from '../components/Portfolio'
import Head from 'next/head'
import Footer from '../components/Footer'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Matheus Tavares</title>
      </Head>

      <Matheus />
      <Infos />
      <Portfolio />
      
      <Footer />
    </>
  )
}

export default Home
