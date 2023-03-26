import React from 'react'
import avatar from '../image/avatar.png';
import classes from './Hero.module.css';
import Typewriter from 'typewriter-effect';


function Hero() {
    return (
        <div className='text-center '>
            <div className={`w-100 ${classes.avatar}`}>
                <img className={classes.img} src={avatar} alt="profile_photo" />
            </div>
            <div className=' '>
                <div className=' text-center p-3 m-2 w-100 '>
                    <h1>Hello, There! </h1>
                    <h1 className='m-2 p-3 w-100 ' id='app'>
                        <Typewriter
                            options={{
                                strings: ['I\'m Saurabh Sharma', 'I\'m Full Stack Developer!'],
                                autoStart: true,
                                loop: true,
                            }}
                        />
                    </h1>

                </div>
            </div>

        </div>
    )
}

export default Hero