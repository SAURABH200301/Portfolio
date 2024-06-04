import React from 'react'
import classes from './Resume.module.css';
import resume from '../image/resume.png'

function Resume() {
    return (
        <div className={`${classes.resume} z-1`}>
                <a className='m-1' href='https://drive.google.com/file/d/17TfzBKacFh-Za4PHY-yn4tJrjOm8-bNY/view?usp=sharing' download target="_blank"  rel="noreferrer">
                    <img className={classes.icon} src={resume} alt='resume' />
                </a>
        </div>
    )
}

export default Resume