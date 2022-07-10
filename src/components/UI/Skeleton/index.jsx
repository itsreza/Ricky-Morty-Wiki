import React from 'react'
import classes from "./index.module.scss"
export default function Skeleton({className}) {
  return (
        <div data-testid="skeleton" className={`${classes.skeleton} ${className}`} />
  )
}
