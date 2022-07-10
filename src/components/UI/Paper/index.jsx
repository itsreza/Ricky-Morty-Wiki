import React from 'react'
import classes from "./index.module.scss"
export default function Paper({children , className}) {
  return (
    <div className={`${classes.paper_container} ${className}`}><div>
      {children}
      </div>
      </div>
  )
}
