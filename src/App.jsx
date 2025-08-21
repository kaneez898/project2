
import styled from './App.module.css'
import Footer from './compnents/Footer'
import Navbar from './compnents/Navbar'
import BlogSection from './pages/blog'
import Contact from './pages/contact/Contact'
import Main from './pages/Home/Main'
import Pricing from './pages/price'
import PricingSection from './pages/price'
import Quote from './pages/quote/Quote'
import Service from './pages/service/Service'
import Team from './pages/teamSection/Team'
import TestimonialSection from './pages/testimonial'
import Welcome from './pages/welcomeSection/Welcome'


function App() {
  

  return (
    <>
    <Navbar/>
    <Main/>
    <Service/>
    <Quote/>
    <Team/>
    <Welcome/>
    <PricingSection/>
    <TestimonialSection/>
    <BlogSection/>
    <Contact/>
    <Footer/>

     </>
  )
}

export default App
