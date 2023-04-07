import React from 'react'
import classes from './SpecialCard.module.css'

function SpecialCard(props) {
  return (
    <div className={classes.card}>{props.children}</div>
  )
}

export default SpecialCard