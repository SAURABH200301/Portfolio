import React from 'react'
import Card from './UI/Card'

function RenderSkills(props) {
    return (
        <Card>
            <div className='fw-bolder fs-3 text-center'>{props.header}</div>
            {
                props.Pro_Lang.map((lang) => {
                    return (
                        <div style={{paddingLeft: '6vw'}}> 
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