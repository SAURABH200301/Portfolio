import React from 'react'
import classes from './Appbar.module.css'
import CurrentDate from './Date'
import Card from './UI/Card'
import { BiHomeAlt2 } from 'react-icons/bi'
import { MdOutlineHomeWork } from 'react-icons/md'
import { SiAboutdotme } from 'react-icons/si';
import { AiOutlineContacts } from 'react-icons/ai';
import { GiSkills } from 'react-icons/gi';
import { GoBriefcase } from "react-icons/go";
import { Link } from "react-scroll";
import Resume from './Resume'

let navArray = [
    {
        navHead: 'Home',
        icon: <BiHomeAlt2 style={{ fontSize: '30px' }} />,
        id: 'home',
        hide: classes.hide
    },
    {
        navHead: 'About',
        icon: <SiAboutdotme style={{ fontSize: '30px' }} />,
        id: 'about',
        hide: classes.hide
    },
    {
        navHead: 'Skills',
        icon: <GiSkills style={{ fontSize: '30px' }} />,
        id: 'skills',
        hide: classes.hide
    },
    // {
    //     navHead: 'Work Experience',
    //     icon: <GoBriefcase style={{ fontSize: '30px' }} />,
    //     id: 'workExp',
    //     hide: classes.hide
    // },
    {
        navHead: 'Work',
        icon: <MdOutlineHomeWork style={{ fontSize: '30px' }} />,
        id: 'work',
        hide: classes.hide
    },
    {
        navHead: 'Contact',
        icon: <AiOutlineContacts style={{ fontSize: '30px' }} />,
        id: 'contact',
        hide: classes.hide
    },

]

function Appbar() {

    return (
        <div className={`${classes.nav} z-1 `}>
            <div className={`row ${classes.content}`}>
                <div className={`col-lg-4 col-sm-4 `}>
                    <div className={` ${classes.width} ${classes.hide} `}>
                        <CurrentDate />
                    </div>
                </div>
                <div className={`col-md-4 col-sm-5`}>
                    <div className='d-flex p-1 justify-content-center'>
                        <Card cursor='pointer'>
                            {
                                navArray.map((nav) => {
                                    return (
                                        <Link
                                            activeClass="active"
                                            to={nav.id}
                                            spy={true}
                                            smooth={true}
                                            offset={-60}
                                            duration={700}
                                            key={nav.id}
                                        >
                                            <span className={classes.padd}>
                                                {nav.icon}
                                            </span>
                                        </Link>
                                    )
                                })
                            }
                        </Card>
                    </div>
                </div>
                <div className={`  col-md-4  ${classes.resume}`}>
                    <Resume/>
                </div>
            </div>
        </div>
    )
}

export default Appbar