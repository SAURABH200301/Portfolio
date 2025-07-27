import React from 'react'
import classes from './Resume.module.css';
import resume from '../image/resume.png'
export const resumeLinks='https://drive.google.com/drive/folders/1bL40n0SjNl1pJ8DWtdvGybw5OF5kat6L?usp=sharing'

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