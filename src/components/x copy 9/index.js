import React from "react"
import classnames from "classnames"
import "./index.css"






// export default function __(props){
//   return(
//     <div>

//     </div>
//   )
// }


export default class __ extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}

  }
  render() {
    
    let classes = classnames({
      "test":true,

    })

    return (
      <div className={classes}>

      </div>
    )
  }
}