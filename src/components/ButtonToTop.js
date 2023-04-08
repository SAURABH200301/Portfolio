import React from 'react'
import { Link } from "react-scroll";
import classes from './ButtonToTop.module.css'
import arrow from '../image/arrow2.png'

function ButtonToTop() {
    return (
        <div className={classes.button}>
            <Link
                activeClass="active"
                to='home'
                spy={true}
                smooth={true}
                offset={-60}
                duration={700}
            >
               <img src={arrow} alt='above' className={classes.arrow}/>
            </Link>
        </div>
    )
}

export default ButtonToTop