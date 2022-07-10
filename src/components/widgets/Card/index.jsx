import React from 'react'
import Badge from '../../UI/Badge'
import Button from '../../UI/Button'
import LineSeparator from '../../UI/LineSeparator'
import classes from "./index.module.scss"
import { useHistory } from "react-router-dom";

export default function Card({characterID, thumbnail , name , status , episodes , location , bodyBadges  , hasFooter}) {
  
  const history = useHistory()
  const renderBodyBadges = bodyBadges?.map((label)=> <Badge variant='blue' label={label} />)

  

  return (
    <div className={classes.card_container}>
      <div className={classes.card_header}>
      <img style={{width : "100%" , borderRadius : "5px 5px 0px 0px"}} src={thumbnail} alt="name" />
      <div className={classes.image_badge}>
      <Badge variant="black" label={status} />
      </div>
      </div>
      <div className={classes.card_body}>
      <div>
      <span style={{    fontSize: 23,
    color: "#333"}}>{name}</span>
      <div className={classes.body_badge_section}>
      {renderBodyBadges}
      </div>
      </div>
      <LineSeparator/>
     <div className={classes.episode_section}>
     Episodes ({episodes})
      <div>
      <Badge variant='orange' label={location} />
      </div>
     </div>
      </div>
      {hasFooter && <div className={classes.card_footer}>
      <Button onClick={()=> history.push(`character?id=${characterID}`)}>more info</Button>
      </div>}
    </div>
  )
}
