import React from 'react'
import AboutHero from '../../components/Hero/AboutHero'
import WhyUs from '../../components/Services/WhyUs'
import Footer from '../../components/Footer/Footer'
import Law from '../../components/Subscribe/Law'
import Acc from '../../components/Services/Acc'


const AboutPage = () => {
  return (
    <div>
      <AboutHero/>
      <Law/>
      <WhyUs/>
      <Acc/>
      <Footer/>
    </div>
  )
}

export default AboutPage
