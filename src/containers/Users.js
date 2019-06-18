// render the children/users
import React, { Component } from 'react';
import { connect } from 'react-redux';

import UserCard from '../components/UserCard'
// import UserForm from './UserForm'
// import { getUsers } from '../actions/users'
import './Users.css'


class Users extends Component {

  // componentDidMount() {
  //   this.props.getUsers()
  // }

  render() {
    return (
      <div className="UsersContainer">
        <h1>Users</h1>
        {this.props.users.map(user => <UserCard key={user.id} user={user} />)}

      </div>
    );
  }
}

  const mapStateToProps = (state) => {
    return({
      users: state.users
    })
  }

// export default connect(mapStateToProps, { getUsers })(Users)
export default connect(mapStateToProps)(Users)
