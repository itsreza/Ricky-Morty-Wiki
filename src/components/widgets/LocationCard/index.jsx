import React from 'react'
import Badge from '../../UI/Badge'
import Paper from "../../UI/Paper"
import classes from "./index.module.scss"
export default function LocationCard({location , dimension , type , residentsCount , className}) {
  return (
    <Paper className={`${classes.location_card} ${className}`}>
       <h2>Location: {location}</h2>
        Dimenstion: <b>{dimension}</b>
        <div className={classes.badge_section}>
        <Badge label={`type: ${type}`} />
        </div>
        <hr/>
        <div className={classes.footer_text}>Number of residents: {residentsCount}</div>
    </Paper>
  )
}
