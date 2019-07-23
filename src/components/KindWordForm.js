import React from 'react'
import { updateKindWordForm } from '../actions/kindWordForm'
import { getUsers } from '../actions/users'
import { connect } from 'react-redux'


const kindWordForm = ({ formData, users, updateKindWordForm, getUsers, userId, kindWord, handleSubmit, editMode}) => {
  const { when, what, heading, who } = formData


  const usersChoice = users.filter(user => user.id === userId ? false : true)
  console.log(usersChoice)
  const usersChoiceOptions = usersChoice.map((u) => <option id={u.id} key={u.attributes.first_name}>{u.attributes.first_name}</option>)


  const handleChange = event => {
    const { name, value } = event.target
    updateKindWordForm(name, value)
  }

  return (
    <form className="FormContainer" onSubmit={event => {
      event.preventDefault()
      debugger // see what formdata is , id for who
      handleSubmit(formData) // inside put debugger, ensure getting right fields, who field
      //on backend with 2 ids,
      //if switching, do before fetching
      //in model
      //pry, to ensure receiving right data
    }}>
      <input
        placeholder="heading"
        name="heading"
        onChange={handleChange}
        value={heading}
      /><br/>

      <select
        placeholder="who"
        name="who"
        onChange={handleChange}
        >
        {usersChoiceOptions}
      </select>
      <br/>

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
      users: state.users.users,
      userId
    }
  }

  export default connect(mapStateToProps, {updateKindWordForm, getUsers})(kindWordForm)
