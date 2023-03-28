import React from 'react'
import Card from './UI/Card'
import classes from './RenderSkills.module.css'

function RenderSkills(props) {
    return (
        <Card>
            <div className='fw-bolder fs-3 text-center'>{props.header}</div>
            {
                props.Pro_Lang.map((lang) => {
                    return (
                        <div key={lang.id} className={classes.padd}> 
                            <img className={lang.class} src={lang.src} alt={lang.id} />
                            <span>{lang.id}</span>
                        </div>
                    )
                })

            }
        </Card>
    )
}

export default RenderSkills