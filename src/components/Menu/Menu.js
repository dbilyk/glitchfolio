import React from "react"
import classnames from "classnames"
import "./Menu.css"

import Hamburger from "../MenuHamburger/MenuHamburger"
import MenuItem from "../MenuItem/MenuItem"
let menuItems = ["HOME", "WORK", "ABOUT", "CONTACT"]


export default class Menu extends React.Component {
  constructor(props) {
    super(props)
    let that = this    
    
    this.state = {
      isOpen: false,
      isMobile: (window.outerWidth<992)?true:false
    }
    //binding functions
    this.throttledResizeHandler = this.throttledResizeHandler.bind(this)

    //events

    //resize debouncer
    window.addEventListener("resize", e=>resizeThrottler(e,that), false);
    var resizeTimeout;
    function resizeThrottler(e,that) {
      // ignore resize events as long as an actualResizeHandler execution is in the queue
      if ( !resizeTimeout ) {
        resizeTimeout = setTimeout(function() {
          resizeTimeout = null;
          that.throttledResizeHandler(e);
        }, 200);
      }
      else{
        //if another resize is fired and we are already waiting on a previous one, clear the timer and assign the new timeout to resizeTimeout.
        clearTimeout(resizeTimeout)
        resizeTimeout = setTimeout(function() {
          resizeTimeout = null;
          that.throttledResizeHandler(e);
        }, 200); 
      }
      
    }
  }

  //event handlers
  throttledResizeHandler() {
    let windowWidth = window.outerWidth;
    if(windowWidth>=992){
      this.setState({isMobile:false})
    }
    else{
      this.setState({isMobile:true})
    }
    
  }

  hamburgerClickHandler(e){
    this.setState({isOpen:!this.state.isOpen})
  }

  render() {
    let classes = classnames(
      'Menu',
      'col',
      'align-items-center',
      {
        "Menu--isOpenMobile": (this.state.isOpen && this.state.isMobile),
        "Menu--isOpenDesktop":(this.state.isOpen && !this.state.isMobile),
        "isMobile": this.state.isMobile,

      })


    return (
      <div className="MenuContainer row">
        <div className={classes}>
          <div className="menuSVGTop"></div>
          <MenuItem label="HOME" action={()=>{true}} />
          <div className="menuSVGSpacer"></div>
          <MenuItem label="PORTFOLIO" action={()=>{true}} />
          <div className="menuSVGSpacer"></div>
          <MenuItem label="ABOUT" action={()=>{true}} />
          <div className="menuSVGSpacer"></div>
          <MenuItem label="CONTACT" action={()=>{true}} />
          <div className="menuSVGBtm"></div>
        </div>
        <Hamburger clickCallback={this.hamburgerClickHandler.bind(this)}/>
        <div style={{minHeight:"5000px",minWidth:"100%"}}></div>
      </div>
    )
  }
}