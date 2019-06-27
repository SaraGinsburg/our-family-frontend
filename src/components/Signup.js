import React from 'react'
import { connect } from 'react-redux'
import { updateSignupForm } from '../actions/signupForm.js'
import { signup } from '../actions/currentUser'

const Signup = ({ signupFormData, updateSignupForm, signup}) => {

  const handleInputChange = event => {
    const { name, value } = event.target
    const updatedFormInfo = {
      ...signupFormData,
      [name]: value
    }
    //updateSignupForm is an action creator.
    //receives updatedFormInfo, and updates signup form
    updateSignupForm(updatedFormInfo)
  }

  const handleSubmit = event => {
    event.preventDefault()
    signup(signupFormData)

  }

  return (
    <form onSubmit={handleSubmit}>
      <input placeholder="first_name" type="text" name="first_name" value={signupFormData.first_name}
      onChange={ handleInputChange }/>
      <input placeholder="last_name" type="text" name="last_name" value={signupFormData.last_name}
      onChange={ handleInputChange }/>
      <input placeholder="username" type="text" name="username" value={signupFormData.username}
      onChange={ handleInputChange }/>
      <input placeholder="birthdate" type="text" name="birthdate" value={signupFormData.birthdate}
      onChange={ handleInputChange }/>
      <input placeholder="picture" type="text" name="picture" value={signupFormData.picture}
      onChange={ handleInputChange }/>
      <input placeholder="password" type="text" name="password" value={signupFormData.password}
      onChange={ handleInputChange }/>
      <input type="submit" value="Sign Up" />
    </form>
  )
}



const mapStateToProps = state => {
  return {
    signupFormData: state.signupForm,
    currentUser: state.currentUser
  }
}


export default connect(mapStateToProps, { updateSignupForm, signup } )(Signup)
