import React from 'react'
import SocialMedia from './SocialMedia'
import Card from './UI/Card'
import classes from './About.module.css'

function About() {
    return (
        <div className='d-flex justify-content-around w-100 ' id='about'>
            <Card card='d-flex justify-content-center ' width='80%'>
                <SocialMedia />
                <div className={`text-center p-1`} >
                    <h1 className={classes.me}>About Me</h1>
                    <div className='d-flex justify-content-around'>
                        <div className={classes.divider}></div>
                    </div>
                    <div className={`${classes.padd} ${classes.about_content}`}>
                        Hi! I'm <span>Saurabh Sharma</span>, and I'm a Computer Science & Engineering Student. 
                        I'm a <span>Programmer, Full Stack Developer</span>. I love developing new things. I do play Valorant, PUBG and Chess to avoid coffee sometimes ;).
                        <br/>
                        Constantly <span>looking for new ideas</span> to implement in real world.
                    </div>
                </div>
            </Card>
        </div>
    )
}

export default About