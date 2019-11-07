import React, { Component } from 'react';
import { connect } from 'react-redux'
class Users extends Component {

  render() {
    let userList = this.props.users.map((user,i) => <li key={i}>{user.username}</li>)
    return (
      <div>
        <ul>
          Users!
          {userList}
          {userList.length}
        </ul>
      </div>
    )
  }
}

//add mapStateToProps here
function mapStateToProps(state){
  return {users: state.users}
}

// connect this component to Redux
export default connect(mapStateToProps)(Users);
