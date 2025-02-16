import { useContext,useState,useEffect } from 'react';
import classes from './App.module.css';
import About from './components/About';
import Appbar from './components/Appbar';
import ButtonToTop from './components/ButtonToTop';
import Contact from './components/Contact';
import DarkModeToggle from './components/DarkModeToggle';
import Hero from './components/Hero';
import Resume from './components/Resume';
import Skills from './components/Skills';
import Work from './components/Work';
import { DarkModeContext } from './components/context/DarkModeContext';
import WorkExperience from './components/WorkExperience';

function App() {
  const { darkMode } = useContext(DarkModeContext);
  const color = darkMode ? 'white' : 'black';

  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    function handleScroll() {
      if (window.pageYOffset > 0) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    }

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <div id='home'>
      <Appbar />
      <div>
        <Hero />
        <About />
        <Skills />
        <WorkExperience/>
        <Work />
        <Contact />
      </div>
      <div><Resume /></div>
      <div className={classes.button}><DarkModeToggle /></div>
      <div className={`${classes.buttonContainer} ${showButton ? classes.show : ''}`}>
        <ButtonToTop />
      </div>
      <div className='text-center m-3 p-3' style={{ color: color }} >
        <p style={{ fontSize: '3vh' }}>Hey there! Thanks for checking out my website. Feel free to contact me :)</p>
        <h3 className={classes.name}>~ Saurabh Sharma ~</h3>
      </div>
    </div>
  );
}

export default App;
