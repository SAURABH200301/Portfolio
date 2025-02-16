import React, { useState, useEffect } from 'react'
import Card from './UI/Card';
import { BsFillSunFill } from 'react-icons/bs'
import { BsFillSunsetFill } from 'react-icons/bs'
import { BsFillMoonStarsFill } from 'react-icons/bs'
import classes from './Date.module.css'


function CurrentDate() {
    var [date, setDate] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => {
            setDate(new Date())
        }, 1000)
        return () => clearInterval(timer);
    }, []);
    var curHr = date.getHours()
    var icon;
    let greet = "Good Morning";
    if (curHr < 12) {
        greet = 'Good Morning';
        icon = <BsFillSunFill style={{ fontSize: '20px',color:'#f2ba49' }} />
    } else if (curHr < 18) {
        greet = 'Good Afternoon'
        icon = <BsFillSunsetFill style={{ fontSize: '20px',color:'#FB9062' }} />
    } else {
        greet = 'Good Evening'
        icon = <BsFillMoonStarsFill style={{ fontSize: '20px', color:'#EDEADE' }} />
    }
    return (
        <div >
            <Card>
                <div className='d-flex justify-content-around fw-bold p-1'><span className='mx-1'>{icon}</span><span  className={`${classes.hide} ${classes.fs}`}>{greet}</span></div>
                <div className={`d-flex justify-content-around fw-bold `}><span  className={`${classes.hide} ${classes.fs}`}>{date.toLocaleDateString()}</span></div>
            </Card>
        </div>
    )
}

export default CurrentDate