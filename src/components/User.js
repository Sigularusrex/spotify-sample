import React, { Component } from 'react'

class User extends Component {
  render() {
    console.log(this.props);
    return(
      <div>
        {this.props.children}
      </div>
    )
  }
}

export default User
