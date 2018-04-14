import React from "react"
import classnames from "classnames"
import "./MenuHamburger.css"


export default class MenuHamburger extends React.Component {
  constructor(props) {
    super(props)
    this.state = {isActive:false}

  }

  handleClick(e){
    this.setState({isActive:!this.state.isActive})
    this.props.clickCallback(e)
  }

  render() {
    let classes = classnames('hamburger--spin', 'hamburger', {
      "is-active": this.state.isActive,
  
    })

    return (
        <div onClick={(e)=>this.handleClick(e)} className={classes}>
          <div className="hamburger-box">
            <div className="hamburger-inner"></div>
          </div>
        </div>
    )
  }
}