import React from 'react'
import classes from './Appbar.module.css'
import CurrentDate from './Date'
import Card from './UI/Card'
import { BiHomeAlt2 } from 'react-icons/bi'
import { MdOutlineHomeWork } from 'react-icons/md'
import { SiAboutdotme } from 'react-icons/si';
import { AiOutlineContacts } from 'react-icons/ai';
import { GiSkills } from 'react-icons/gi';
import { Link } from "react-scroll";


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
    // const [isHover, setIsHover] = useState(false);
    const Reveal = (id) => {
        // setIsHover(true);
    }
    const unReveal = (id) => {
        // setIsHover(false);
    }
    // useEffect(()=>{console.log(isHover)},[isHover])
    return (
        <div className={`${classes.nav} z-1`}>
            <div className={` ${classes.bg}`}></div>
            <div className={`row ${classes.content} `}>
                <div className='col-md-4 w-30'>
                    <div className='w-50'>
                        <CurrentDate />
                    </div>
                </div>
                <div className={`col-md-4 `}>
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
                                        >
                                            <span className={`p-2`} onMouseEnter={Reveal(`${nav.id}`)} onMouse={unReveal(`${nav.id}`)}>
                                                {nav.icon}
                                                 <span className={nav.hide} id='home'>{nav.navHead}</span>
                                            </span>
                                        </Link>
                                    )
                                })
                            }
                        </Card>
                    </div>
                </div>
                <div className={` col-md-4 z-1 `}>
                    <div className=' d-flex justify-content-around'>
                        <h3 className={classes.name}>Saurabh Sharma</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Appbar