import React from 'react'
import classes from './Resume.module.css';
import resume from '../image/resume.png'
export const resumeLinks='https://drive.google.com/file/d/1DSrmFNoL8-QXHsOcvJLoYY3Q_zuNkAEU/view?usp=sharing'

function Resume() {
    const resumeLink=resumeLinks;
    return (
        <div className={`${classes.resume} z-1`}>
                <a className='m-1' href={`${resumeLink}`} download target="_blank"  rel="noreferrer">
                    <img className={classes.icon} src={resume} alt='resume' />
                </a>
        </div>
    )
}

export default Resume