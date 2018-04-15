import React from "react"
import classnames from "classnames"
import "./MenuItem.css"






//PROPS: label, action
export default function __(props){
    let classes = classnames(
      "menuItemContainer",
      "row",
      
    )
    let btnClasses = classnames(
      "btn",
      "col-8",
      "btn-primary",
      "menuBtn"

    )
  return(
    <div className={classes}>
      <span className="menuItemMiddle row">
        <span className="menuItemLeft col-2"></span>
        <button className={btnClasses} onClick={props.action}>{props.label}</button>
        <span className="menuItemRight col-2"></span>
      </span>
      {/* <div className="menuItemBtm col-12"></div> */}
    </div>
  )
}


// export default class __ extends React.Component {
//   constructor(props) {
//     super(props)
//     this.state = {}

//   }
//   render() {
    
//     let classes = classnames({
//       "test":true,

//     })

//     return (
//       <div className={classes}>

//       </div>
//     )
//   }
// }