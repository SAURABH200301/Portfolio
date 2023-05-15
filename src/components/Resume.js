import React from 'react'
import classes from './Resume.module.css';
import resume from '../image/resume.png'

function Resume() {
    return (
        <div className={`${classes.resume} z-1`}>
                <a className='m-1' href='https://drive.google.com/file/d/1w51ut1FxtQ81EhmU-GtVShGAJPlyuTWW/view?usp=share_link' download target="_blank"  rel="noreferrer">
                    <img className={classes.icon} src={resume} alt='resume' />
                </a>
        </div>
    )
}

export default Resume