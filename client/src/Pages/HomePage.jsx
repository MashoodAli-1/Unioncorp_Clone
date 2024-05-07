import React from 'react'
import NavBar from '../Components/NavBar/NavBar'
import Hero from '../Components/HeroSection/Hero'
import About from '../Components/About/About'
import Service from '../Components/Services/Service'
import CaseStudy from '../Components/CaseStudy/CaseStudy'
import Team from '../Components/Teams/Team'
import Footer from '../Components/Footer/Footer'
import Blog from '../Components/Blogs/Blog'
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
AOS.init();
const HomePage = () => {
  return (
    <div>
      <NavBar/>
      <Hero/>
      <About/>
      <Service/>
      <CaseStudy/>
      <Team/>
      <Blog/>
      <Footer/>
    </div>
  )
}

export default HomePage
