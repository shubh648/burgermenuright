import React, { Component } from 'react';
import './App.css';
import Home from './components/Home';
import BurgerMenu from './components/BurgerMenu';
import SideBar from './components/SideBar';
import { connect } from 'react-redux';

class App extends Component {

  bodyClick = (e) =>{
    return (this.props.menuClicked)?(this.props.menuOnClick()):(e.stopPropagation())
  }

  render() {
    return (
      <div className="App">
        <div id="myCanvasNav" className="overlay"
          onClick={this.bodyClick} style={(this.props.menuClicked)?{width:"100%"}:{width:"0"}}>
        </div>
        <BurgerMenu />
        <SideBar />
        <Home />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return{
    menuClicked : state.menuClicked
  }
}

function mapDispatchToProps(dispatch) {
  return{
    menuOnClick: () => dispatch({ type: 'MENU_CLICKED'})
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(App);
