import React from 'react'
import Hero from '../Components/Hero'
import LatestBooks from '../Components/LatestBooks'
import BestSeller from '../Components/BestSeller'
import Policies from '../Components/Policies'
import NewsLetter from '../Components/NewsLetter'

const Home = () => {
  return (
    <div>
     <Hero/>
     <LatestBooks/>
     <BestSeller/>
     <Policies/>
     <NewsLetter/>
    </div>
  )
}

export default Home
