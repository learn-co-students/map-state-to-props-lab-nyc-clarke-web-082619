import React, { Component } from "react";
import { connect } from "react-redux";
// add any needed imports here
class Users extends Component {
  render() {
    return (
      <div>
        <ul>
          {this.props.users.map(user => {
            return <li>{user.username}</li>;
          })}
        </ul>
        User count: {this.props.users.length}
      </div>
    );
  }
}

//add mapStateToProps here

function mapStateToProps(state) {
  return state;
}

// connect this component to Redux
export default connect(mapStateToProps)(Users);
