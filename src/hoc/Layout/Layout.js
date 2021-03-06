import React, { Component } from 'react';
import Auxilliary from '../Auxilliary/Auxilliary';
import classes from './Layout.css';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';

class Layout extends Component {
  
  
  state = {
    showSideDrawer: false
  }
  
  SideDrawerClosedHandler = () => {
      this.setState({showSideDrawer: false}); 
    }

  SideDrawerToggleHandler = () => {
    this.setState((prevState) => {
      return {showSideDrawer: !prevState.showSideDrawer}
    });
  }  

  render() {
    return (
    <Auxilliary>
      <Toolbar drawerToggleClicked={this.SideDrawerToggleHandler}/>
      <SideDrawer 
        open={this.state.showSideDrawer} 
        closed={this.SideDrawerClosedHandler} />
  <main className="Content">
      {this.props.children}
  </main>  
  </Auxilliary>)
  }
}


export default Layout; 