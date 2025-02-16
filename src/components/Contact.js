import React from 'react'
import Card from './UI/Card'
import classes from './Contact.module.css'
import mail from '../image/mail.png'
import linkedin from '../image/linkedin.png'
import insta from '../image/insta.png'
import twitter from '../image/twitter.png'
import LeftIn from '../Animation/LeftIn.js'

const contacts = [
    {
        src: mail,
        content: 'saurabhsha2003@gmail.com'
    },
    {
        src: linkedin,
        content: 'SAURABH SHARMA'
    },
    {
        src: insta,
        content: '@saurabh_0820'
    },
    {
        src: twitter,
        content: '@Saurabh71428055'
    }
]
function Contact() {
    return (
        <div id='contact' className='d-flex justify-content-around mt-5 flex-wrap'>
            <Card width='80%'>
                <div>
                    <h1 className='text-center'>Contact Me</h1>
                    <div className='d-flex justify-content-around flex-wrap'>
                        <div className={classes.divider}></div>
                    </div>
                    <div className={`${classes.padd} d-flex justify-content-around row flex-wrap `}>
                            <Card>
                                {
                                    contacts.map((c) => {
                                        return (
                                            <LeftIn>
                                                <div key={c.src} className='m-3 row '>
                                                    <div className='col-md-4 col-sm-12 '>
                                                        <img className={classes.icon} src={c.src} alt='mail' />
                                                    </div>
                                                    <div className='col-md-4 col-sm-12 '>
                                                        <span>{c.content}</span>
                                                    </div>
                                                </div>
                                            </LeftIn>
                                        )
                                    })
                                }

                            </Card>
                    </div>
                </div>
            </Card>
        </div>
    )
}

export default Contact