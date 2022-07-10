import React , {useState}  from 'react'
import classes from "./index.module.scss"
export default function Accordion({title = "accordion" , children , className}) {
const [isExpanded, setIsExpanded] = useState(false)
    const onToggleAccordion = ()=> {
        setIsExpanded((prevState) => !prevState)
    }
    
const icon = isExpanded ? <span>&#8722;</span> : <span>&#43;</span> ;


  return (
   <>
   <div className={`${classes.accordion_header} ${className}`} onClick={onToggleAccordion}>
    <span className={classes.accordion_header_title}>{title}</span>
    {/* <span className={classes.accordion_header_icon}>&#10148;</span> */}
    <div className={classes.accordion_header_icon}>
      {icon}
    </div>
   </div>
   <div className={classes.accordion_body}>
    <div className={isExpanded ? classes.show : classes.hidden}>
      <div className={classes.content}>

    {children}
      </div>
    </div>
   </div>
</>
  )
}
