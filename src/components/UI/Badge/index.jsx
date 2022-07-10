import React from 'react'
import classes from "./index.module.scss"

export default function Badge({label , variant = "blue"}) {

const colors = {
    blue : classes.blue,
    black : classes.black,
    orange : classes.orange
}

  return (
    <span className={`${classes.badge_container} ${colors[variant] ?? colors.blue}`}>{label}</span>
  )
}
