import React from 'react';
import Card from './UI/Card';
import classes from './WorkExperience.module.css';
import WorkCard from './UI/WorkCard';
import LeftIn from '../Animation/LeftIn';
import {WorkExperiences} from '../constants/portfolio-constant'

export default function WorkExperience(){
    const workExperinces= WorkExperiences;
    return (
        <div className='d-flex justify-content-center w-100 mt-5' id='workExp'>
            <Card width='80%'>
                <div>
                    <h1 className='text-center'>Work Experience</h1>
                    <div className='d-flex justify-content-around my-1'>
                        <div className={classes.divider}></div>
                    </div>
                    {
                        workExperinces.map((w,i) => {
                            return (
                                <div key={i} className={`text-center ${classes.padd}`}>
                                    <WorkCard>
                                        <div className='d-flex justify-content-around row p-2'>
                                            <div className='col-md-6'>
                                                <LeftIn>
                                                    <div className='d-flex flex-column'>
                                                        <div className='d-flex justify-content-start'>
                                                            <span class={`badge text-bg-dark rounded-pill bg-danger mx-1 ${classes.badgeClass}`}>{w.typeOfExperience}</span>
                                                           {w.currentlyWorking && <span class={`badge text-bg-dark rounded-pill bg-success ${classes.badgeClass}`}>Currently Working</span>}
                                                        </div>
                                                        <div className='d-flex justify-content-center'>
                                                            <img className={`rounded ${classes.img}`} src={w.organizationLogo} alt={w.organizationName} />
                                                        </div>
                                                    </div>                                                
                                                </LeftIn>
                                            </div>

                                            <div className={`${classes.content} col-md-6 `}>
                                                <LeftIn>
                                                    <h3 className='mt-1'>{w.organizationName}</h3>
                                                    <h5 className='mt-1'>Designation: {w.designation}</h5>
                                                    <span className='mt-1'>Start Date: {w.startDate}   {!w.currentlyWorking && <span>- End Date: {w.endDate}</span>}</span>
                                                    {!w.currentlyWorking && <p className='mt-1'>Duration: {w.durationMonths} Months</p>}
                                                    <p className='mt-1'>{w.description}</p>
                                                </LeftIn>
                                            </div>
                                        </div>
                                    </WorkCard>
                                </div>
                            )
                        })
                    }
                </div>
            </Card>
        </div>
    )
}