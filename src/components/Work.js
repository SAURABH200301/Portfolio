import React from 'react';
import Card from './UI/Card';
import classes from './Work.module.css';
import chatapp from '../image/chat_app.gif';
import boxOffice from '../image/box_office.gif';
import newsApp from '../image/newsapp.gif';
import musicPlayer from '../image/musicplayer.gif';
import { BsGithub } from 'react-icons/bs';
import react from '../image/react.png';
import firebase from '../image/firebase.png';
import api from '../image/api.png';
import html from '../image/html.png';
import css from '../image/css.png';
import js from '../image/js.png'
import link from '../image/link.png'


const work = [
    {
        src: chatapp,
        head: 'Join- A chatting app',
        desc: 'Join is a chatting application. It is open group chatting platform where anyone can login with google or facebook and start there chats.',
        techUsed: [react, firebase],
        LiveLink: 'https://chat-app-49705.web.app/',
        isLive: true,
        GithubLink: 'https://github.com/SAURABH200301/Chat-App'
    },
    {
        src: boxOffice,
        head: 'Box Office',
        desc: 'Box Office is a WebApp where you can search about actors and movies make them starred.',
        techUsed: [react, api],
        LiveLink: 'https://box-office-steel.vercel.app/',
        isLive: true,
        GithubLink: 'https://github.com/SAURABH200301/box-office'
    },
    {
        src: newsApp,
        head: 'News App',
        desc: 'News App is an application where you can read live News.',
        techUsed: [react, api],
        LiveLink: '',
        isLive: false,
        GithubLink: 'https://github.com/SAURABH200301/News_App'
    },
    {
        src: musicPlayer,
        head: 'Music Player',
        desc: 'Music Player is demo of todays spotify not same',
        techUsed: [html, css, js],
        LiveLink: '',
        isLive: false,
        GithubLink: 'https://github.com/SAURABH200301/MusicPlayer'
    }
]
function Work() {
    return (
        <div className='d-flex justify-content-center w-100 mt-5' id='work'>
            <Card width='80%'>
                <div>
                    <h1 className='text-center'>Work</h1>
                    <div className='d-flex justify-content-around'>
                        <div className={classes.divider}></div>
                    </div>
                    {
                        work.map((w) => {
                            return (
                                <div className='text-center py-2 px-5'>
                                    <Card>
                                        <div className='d-flex justify-content-around row p-2'>
                                            <div className='col-md-6'>
                                                <img className={`rounded ${classes.img}`} src={w.src} alt={w.src} />
                                            </div>
                                            <div className={`${classes.content} col-md-6 `}>
                                                <h3>{w.head}</h3>
                                                <p>{w.desc}</p>
                                                <h5>Technologies Used</h5>
                                                <div>
                                                    {
                                                        w.techUsed.map((t) => {
                                                            return (
                                                                <img className={classes.icon} src={t} alt='img' />
                                                            )
                                                        })
                                                    }
                                                </div>
                                                <h5>Links</h5>
                                                <div className='d-flex justify-content-center '>
                                                    {
                                                        w.isLive &&
                                                        <a href={w.LiveLink} >
                                                            <img className={classes.icon} src={link} alt='link' />
                                                        </a>
                                                    }
                                                    <a href={w.GithubLink} className='mt-2 pt-4 '>
                                                        <BsGithub style={{ fontSize: '6vh', color: 'black' }} />
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </Card>
                                </div>
                            )
                        })
                    }
                    <div className='d-flex justify-content-center'>
                        <Card width='8%'>
                            <p className='fw-bold'>For More</p>
                            <a href='https://github.com/SAURABH200301'>
                                <BsGithub style={{ fontSize: '6vh', color: 'black' }} />
                            </a>
                        </Card>
                    </div>
                </div>
            </Card>
        </div>
    )
}

export default Work