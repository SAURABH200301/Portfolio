import React from "react";
import classes from './WorkCard.module.css'

const WorkCard = (props) => {
    return <div className={`${classes.card} m-2 `} style={{ width: `${props.width}`, cursor: `${props.cursor}` }}>
        {props.children}
    </div>
}

export default WorkCard;