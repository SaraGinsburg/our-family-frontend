import React, { Component } from 'react';
import { connect} from 'react-redux';

// import { updateUserFormData } from '../actions/userForm'
// import {createUser } from '../actions/users';

class UserForm extends Component {

  handleOnChange = event => {
    const { name, value } = event.target;
    const currentUserFormData = Object.assign({}, this.props.user.FormData, {
      [name]: value
    })
    this.props.updateUserFormData(currentUserFormData)
  }

  handleOnSubmit = event => {
    event.preventDefault()
    this.props.createUser(this.props.userFormData)
  }

  render() {
    const { first_name, last_name, birthdate,points_earned } = this.props.userFormData
    return (
      <div>
        Add a child
        <form onSubmit={this.handleOnSubmit}>
          <div>
            <label htmlFor="first_name">First Name:</label>
            <input
              type="text"
              onChange={this.handleOnChange}
              name="first_name"
              value={first_name}
            />
          </div>
          <div>
            <label htmlFor="last_name">last Name:</label>
            <input
              type="text"
              onChange={this.handleOnChange}
              name="last_name"
              value={last_name}
            />
          </div>
          <div>
            <label htmlFor="birthdate">Birthdate:</label>
            <input
              type="text"
              onChange={this.handleOnChange}
              name="birthdate"
              value={birthdate}
            />
          </div>

          <button type="submit">Add Child</button>
        </form>
      </div>
    )
  }
}

// const mapStateToProps = state => {
//   return {
//     userData: state.userData
//   }
// }

export default UserForm
// export default connect(mapStateToProps)(UserForm)
// export default connect(mapStateToProps, {
//   updateUserData,
//   createUser
// })(UserForm)
