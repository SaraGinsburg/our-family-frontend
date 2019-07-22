import React from 'react'
import { updateKindWordForm } from '../actions/kindWordForm'
import { getUsers } from '../actions/users'
import { connect } from 'react-redux'


const kindWordForm = ({ formData, updateKindWordForm, userId, kindWord, handleSubmit, editMode}) => {
  const { when, what, heading, who } = formData

  const usersChoice = users.filter(user => user.id === action.userId ? false : true)

  console.log(usersChoice)
  const usersChoiceOptions = usersChoice.map((u) => <option key={u.first_name}>{u.first_name})


  const handleChange = event => {
    const { name, value } = event.target
    updateKindWordForm(name, value)
  }

  return (
    <form onSubmit={event => {
      event.preventDefault()
      handleSubmit(formData)
    }}>
      <input
        placeholder="heading"
        name="heading"
        onChange={handleChange}
        value={heading}
      /><br/>

      <input
        placeholder="who"
        name="who"
        onChange={handleChange}
        value=<select>{usersChoiceOptions}</select>
      /><br/>

      <input
        placeholder="when"
        name="when"
        onChange={handleChange}
        value={when}
      /><br/>

      <input
        placeholder="what"
        name="what"
        onChange={handleChange}
        value={what}
      /><br/>

      <input
        type="submit"
        value={editMode ? "Update Kind Word" : "Create Kind Word " }
      />

    </form>
  )}


  const mapStateToProps = state => {
    const userId = state.currentUser ? state.currentUser.id : ""
    return {
      formData: state.kindWordForm,
      users: state.users,
      userId
    }
  }

  export default connect(mapStateToProps, {updateKindWordForm})(kindWordForm)
