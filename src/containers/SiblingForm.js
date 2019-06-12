import React, { Component } from 'react';
import { connect} from 'react-redux';

// import { updateSiblingFormData } from '../actions/siblingForm'
// import {createSibling } from '../actions/siblings';

class SiblingForm extends Component {

  handleOnChange = event => {
    const { name, value } = event.target;
    const currentSiblingFormData = Object.assign({}, this.props.sibling.FormData, {
      [name]: value
    })
    this.props.updateSiblingFormData(currentSiblingFormData)
  }

  handleOnSubmit = event => {
    event.preventDefault()
    this.props.createSibling(this.props.siblingFormData)
  }

  render() {
    const { first_name, last_name, birthdate,points_earned } = this.props.siblingFormData
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

const mapStateToProps = state => {
  return {
    siblingData: state.siblingData
  }
}

export default connect(mapStateToProps)(SiblingForm)
// export default connect(mapStateToProps, {
//   updateSiblingData,
//   createSibling
// })(SiblingForm)
