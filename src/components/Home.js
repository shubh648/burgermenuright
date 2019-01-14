import React, { Component } from 'react';
import { connect} from 'react-redux'

class Home extends Component {
  render() {
    return (
      <div className="body">
        <h1>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque, quos, illo architecto sapiente asperiores ducimus maiores ex dolores placeat rem dolorum nulla recusandae numquam facilis voluptas? Beatae eaque provident ullam!</h1>
      </div>
    )
  }
}

function mapStateToProps(state) {
    return{
        menuClicked : state.menuClicked
    }
  }
  
  export default connect(mapStateToProps)(Home);