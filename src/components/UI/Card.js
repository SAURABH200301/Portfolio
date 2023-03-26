import React from "react";
import classes from './Card.module.css'

const Card = (props) => {
    return <div className={`${classes.card} m-2 `} style={{ width: `${props.width}`, cursor: `${props.cursor}` }}>
        {props.children}
    </div>
}

export default Card;