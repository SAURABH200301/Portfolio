import { useContext, useState, useEffect, Suspense, lazy } from 'react';
import classes from './App.module.css';
import Appbar from './components/Appbar';
import ButtonToTop from './components/ButtonToTop';
import DarkModeToggle from './components/DarkModeToggle';
import Resume from './components/Resume';
import avatar from "../src/image/avatar2.png";
import { DarkModeContext } from './components/context/DarkModeContext';

const About = lazy(() => import('./components/About'));
const Contact = lazy(() => import('./components/Contact'));
const Hero = lazy(() => import('./components/Hero'));
const Skills = lazy(() => import('./components/Skills'));
const Work = lazy(() => import('./components/Work'));
const WorkExperience = lazy(() => import('./components/WorkExperience'));

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
    <div>
      <Appbar />
      <div>
        <Suspense fallback={<div className="text-center p-5" style={{ color: color }}>
          <img src={avatar} style={{ maxHeight: "40vh" }} alt="profile_photo" fetchpriority='high' />
          <h2>Hang tight, I'm almost there! 🚀</h2>
        </div>}>
          <Hero />
          <About />
          <Skills />
          <WorkExperience />
          <Work />
          <Contact />
        </Suspense>
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
