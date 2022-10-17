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
        <meta charSet="UTF-8"/>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge"/>
        <meta name="description" content="18 anos, desenvolvedor full-stack"/>
        <link rel="canonical" href="https://matheustavares.me"/>        
        <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin="true"
          />
        <link 
        href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,400;0,500;0,600;0,700;0,800;1,400;1,500;1,600&display=swap"
         rel="stylesheet"/>
                
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
