import React from 'react'
import Skeleton from '../../UI/Skeleton'
import classes from "./index.module.scss"

export default function CardSkeleton() {
  return (
   <div className={classes.card_skeleton_container}>
    <Skeleton className={classes.image_skeleton} />
    <Skeleton className={classes.header} />
    <Skeleton className={classes.body} />
    </div>
  )
}
