import classes from './App.module.css';
import About from './components/About';
import Appbar from './components/Appbar';
import ButtonToTop from './components/ButtonToTop';
import Contact from './components/Contact';
import DarkModeToggle from './components/DarkModeToggle';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Work from './components/Work';

function App() {
  return (
    <div className={` ${classes.body}`} id='home'>
      <Appbar />
      <div>
        <Hero />
        <About />
        <Skills />
        <Work />
        <Contact />
      </div>
      <div className={classes.button}><DarkModeToggle/></div>
      <ButtonToTop/>
      <div className='text-center m-3 p-3'>
        <p style={{ fontSize: '3vh' }}>Hey there! Thanks for checking out my website. Feel free to contact me :)</p>
        <h3 className={classes.name}>~ Saurabh Sharma ~</h3>
      </div>
    </div>
  );
}

export default App;
