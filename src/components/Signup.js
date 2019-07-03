import React from 'react'
import { connect } from 'react-redux'
import { updateSignupForm } from '../actions/signupForm.js'
import { signup } from '../actions/currentUser'

const Signup = ({ signupFormData, updateSignupForm, signup, history }) => {

  const handleUserInputChange = event => {
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
    signup(signupFormData, history)

  }

  return (
    <form onSubmit={handleSubmit}>
      <input placeholder="first_name" type="text" name="first_name" value={signupFormData.first_name}
      onChange={ handleUserInputChange }/>
      <input placeholder="last_name" type="text" name="last_name" value={signupFormData.last_name}
      onChange={ handleUserInputChange }/>
      <input placeholder="username" type="text" name="username" value={signupFormData.username}
      onChange={ handleUserInputChange }/>
      <input placeholder="birthdate" type="text" name="birthdate" value={signupFormData.birthdate}
      onChange={ handleUserInputChange }/>
      <input placeholder="picture" type="text" name="picture" value={signupFormData.picture}
      onChange={ handleUserInputChange }/>
      <input placeholder="password" type="text" name="password" value={signupFormData.password}
      onChange={ handleUserInputChange }/>
      <input type="submit" value="Sign Up" />
    </form>
  )
}



const mapStateToProps = state => {
  return {
    signupFormData: state.signupForm
  }
}


export default connect(mapStateToProps, { updateSignupForm, signup } )(Signup)
