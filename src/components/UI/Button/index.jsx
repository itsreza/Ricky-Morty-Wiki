import React from 'react'
import classes from "./index.module.scss"
export default function Button({children , onClick}) {
  return (
    <button onClick={onClick} className={classes.primary_button}>{children}</button>
  )
}
