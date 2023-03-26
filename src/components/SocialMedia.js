import React from 'react'
import { BsLinkedin, BsGithub, BsFacebook } from 'react-icons/bs'
import { GrInstagram,GrTwitter } from 'react-icons/gr'
import Card from './UI/Card'
import classes from './SocialMedia.module.css'

function SocialMedia() {
    return (
        <div className={`d-flex justify-content-around ${classes.social}`}>
            <Card card='p-3 ' width='55%'>
                <a href='https://www.linkedin.com/in/saurabh-sharma-a24259121/'>
                    <BsLinkedin style={{ fontSize: '6vw', color: 'darkblue' }} />
                </a>
                <a href='https://github.com/SAURABH200301'>
                    <BsGithub style={{ fontSize: '6vw', color: 'black' }} />
                </a>
                <a href='https://www.instagram.com/saurabh_0820/'>
                    <GrInstagram style={{ fontSize: '6vw' }} />
                </a>
                <a href='https://www.facebook.com/donttaketention'>
                    <BsFacebook style={{ fontSize: '6vw', color: 'blue' }} />
                </a>
                <a href='https://twitter.com/Saurabh71428055'>
                    <GrTwitter  style={{ fontSize: '6vw' }}/>
                </a>
            </Card>
        </div>
    )
}

export default SocialMedia