import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';
import Gallery from '../components/Gallery';
import BlogSection from '../components/BlogSection';
import styles from '../styles/LandingPage.module.css';

const LandingPage = () => {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Gallery />
      <BlogSection />
    </>
  )
}

export default LandingPage;