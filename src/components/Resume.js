import React from 'react'
import classes from './Resume.module.css';
import resume from '../image/resume.png'

function Resume() {
    const resumeLink='https://drive.google.com/file/d/1S6-hSmd64VPGFnhNhvDEk4TR8iRQ0aIW/view'
    return (
        <div className={`${classes.resume} z-1`}>
                <a className='m-1' href={`${resumeLink}`} download target="_blank"  rel="noreferrer">
                    <img className={classes.icon} src={resume} alt='resume' />
                </a>
        </div>
    )
}

export default Resume