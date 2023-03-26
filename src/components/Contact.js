import React from 'react'
import Card from './UI/Card'
import classes from './Contact.module.css'
import mail from '../image/mail.png'
import phone from '../image/phone.png'
import linkedin from '../image/linkedin.png'
import insta from '../image/insta.png'
import twitter from '../image/twitter.png'

const contacts = [
    {
        src: mail,
        content: 'saurabhsha2003@gmail.com'
    },
    {
        src: phone,
        content: '9455158814'
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
        <div id='contact' className='d-flex justify-content-around mt-5'>
            <Card width='80%'>
                <div>
                    <h1 className='text-center'>Contact Me</h1>
                    <div className='d-flex justify-content-around'>
                        <div className={classes.divider}></div>
                    </div>
                    <div className='d-flex justify-content-around'>
                        <Card width='50%'>
                            {
                                contacts.map((c) => {
                                    return (
                                        <div className='mx-5'>
                                            <img className={classes.icon} src={c.src} alt='mail' />
                                            <span>{c.content}</span>
                                        </div>
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