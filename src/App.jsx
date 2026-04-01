import './index.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import ValueProp from './components/ValueProp';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <ValueProp />
        <Services />
        <Testimonials />
        <Newsletter />
      </main>
      <Footer />
    </>
  );
}

export default App;
