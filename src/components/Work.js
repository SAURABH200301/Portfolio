/* eslint-disable no-restricted-globals */
import React from 'react';
import Card from './UI/Card';
import WorkCard from './UI/WorkCard';
import classes from './Work.module.css';
import chatapp from '../image/chat_app.gif';
import boxOffice from '../image/box_office.gif';
import newsApp from '../image/newsapp.gif';
import musicPlayer from '../image/musicplayer.gif';
import tasky from '../image/Tasky.gif';
import { BsGithub } from 'react-icons/bs';
import react from '../image/react.png';
import express from '../image/express.png'
import node from '../image/node.png'
import firebase from '../image/firebase.png';
import mongo from '../image/mongo.png'
import api from '../image/api.png';
import html from '../image/html.png';
import css from '../image/css.png';
import js from '../image/js.png'
import link from '../image/link.png'
import LeftIn from '../Animation/LeftIn';
import bootstrap from '../image/BS.png'


const work = [
    {
        src: chatapp,
        head: 'Join- A chatting app',
        desc: 'Join is a chatting application. It is open group chatting platform where anyone can login with google or facebook and start there chats.',
        techUsed: [react, firebase,node],
        LiveLink: 'https://chat-app-49705.web.app/',
        isLive: true,
        GithubLink: 'https://github.com/SAURABH200301/Chat-App'
    },
    {
        src: tasky,
        head: 'Tasky- A task Management App',
        desc: 'Task management app gives you feature of authentication, CRUD function of MONGODB',
        techUsed: [html, css, react, express, node, mongo],
        LiveLink: '',
        isLive: false,
        GithubLink: 'https://github.com/SAURABH200301/Task-Management-app'
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
        techUsed: [react, api,bootstrap],
        LiveLink: '',
        isLive: false,
        GithubLink: 'https://github.com/SAURABH200301/News_App'
    },
    {
        src: musicPlayer,
        head: 'Music Player',
        desc: 'Music Player is demo of todays spotify not same. The website is created using Javascript, HTML and CSS only no other CSS library is used. ',
        techUsed: [html, css, js],
        LiveLink: '',
        isLive: false,
        GithubLink: 'https://github.com/SAURABH200301/MusicPlayer'
    },

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
                        work.map((w,i) => {
                            return (
                                <div key={i} className={`text-center ${classes.padd}`}>
                                    <WorkCard>
                                        <div className='d-flex justify-content-around row p-2'>

                                            <div className='col-md-6'>
                                                <LeftIn>
                                                    <img className={`rounded ${classes.img}`} src={w.src} alt={w.src} />
                                                </LeftIn>
                                            </div>

                                            <div className={`${classes.content} col-md-6 `}>
                                                <LeftIn>
                                                    <h3>{w.head}</h3>
                                                    <p>{w.desc}</p>
                                                    <h5>Technologies Used</h5>
                                                    <div>
                                                        {
                                                            w.techUsed.map((t) => {
                                                                return (
                                                                <>
                                                                    <img key={t} className={classes.icon} src={t} alt={t.head} />
                                                                </>
                                                                )
                                                            })
                                                        }
                                                    </div>
                                                    <h5>Links</h5>
                                                    <div className='d-flex justify-content-center '>
                                                        {
                                                            w.isLive &&
                                                            <a href={w.LiveLink}>
                                                                <img className={classes.icon} src={link} alt='link' />
                                                            </a>
                                                        }
                                                        <a href={w.GithubLink} className='mt-2 pt-4 '>
                                                            <BsGithub style={{ fontSize: '6vh', color: 'black' }} />
                                                        </a>
                                                    </div>
                                                </LeftIn>
                                            </div>
                                        </div>
                                    </WorkCard>
                                </div>
                            )
                        })
                    }
                    <div className='d-flex justify-content-around'>
                        <Card width='7vw'>
                            <p className={`fw-bold fs-6 ${classes.forMo}`}>For More</p>
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