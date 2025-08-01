import React from 'react'
import Nvbar from '../components/homepage/nav/Nvbar'
import Hero from '../components/homepage/hero/Hero'
import Myservice from '../components/homepage/myservice/Myservice'
import Ft from '../components/homepage/footer/Ft'
import Questions from '../components/homepage/questions/Questions'


const Home = () => {
  return (
    <>
    <Nvbar/>
    <Hero/>
    <Myservice/>
    <Questions />
    <Ft/>
    </>
  )
}

export default Home