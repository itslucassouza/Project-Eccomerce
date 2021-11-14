import React from 'react'
import Head from 'next/head'
import Nav from '../components/Nav'
import Banner from '../components/Banner'
import Welcome from '../components/Welcome'
import Contact from '../components/Contact'
import News from '../components/News'
import Baseboard from '../components/Baseboard'
import Shops from '../components/Shops'
import Solutions from '../components/Solutions'

const Home: React.FC = () => {
  return (
    <div>
      <Head>
        <title>Home Page</title>
      </Head>

      <main>
        <Nav />
        <Banner />
        <Shops />
        <Solutions />
      </main>
      <Welcome />
      <Contact />
      <News />
      <footer>
        <Baseboard />
      </footer>
    </div>
  )
}
export default Home
