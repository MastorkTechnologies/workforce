import './App.css'
import Contact from './components/FAQS/Contact'
import Faqs from './components/FAQS/Faqs'
import Hero from './components/Hero/Hero'
import Agent from './components/agent/Agent'
import Customer from './components/customer/Customer'
import Explore from './components/explore/Explore'

import Feature from './components/feature/Feature'
import Footer from './components/footer/Footer'
import Getstarted from './components/getstarted/Getstarted'
import Testimonial from './components/testimonial/Testimonial'


function App() {
  return (
    <div className='flex flex-col gap-10 md:gap-24 xl:gap-24 2xl:gap-24  '>
      <Hero />
      <Feature />
      <Explore />
      <Agent />
      <Customer />
      <Faqs />
      <Contact />
      <Testimonial/>
      <Getstarted />
      <Footer />
    </div>
  )
}

export default App
