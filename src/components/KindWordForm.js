import React from 'react'
import { updateKindWordForm } from '../actions/kindWordForm'
import { getUsers } from '../actions/users'
import { connect } from 'react-redux'

const kindWordForm = ({ formData, users, updateKindWordForm, getUsers, userId, kindWord, handleSubmit, editMode}) => {
  const { when, what, heading, who } = formData


  const usersChoice = users.filter(user => user.id === userId ? false : true)

  const usersChoiceOptions = usersChoice.map((u) => <option value={u.id} key={u.id}>{u.attributes.first_name}</option>)



  const handleChange = event => {
    const { name, value } = event.target
    updateKindWordForm(name, value)
  }

  return (
    <form className="FormContainer" onSubmit={event => {
      event.preventDefault()
      handleSubmit(formData)

    }}>
      <br/>
      <select
        value={heading}
        placeholder="heading"
        name="heading"
        onChange={handleChange}
      >
        <option value="" disabled>Select type:</option>
        <option value="encouragement">Encouragement</option>
        <option value="humor">Humor</option>
        <option value="gratitude">Gratitude</option>
        <option value="complement">Complement</option>
        <option value="good advice">Good Advice</option>
        <option value="good listening">Good Listening</option>
        <option value="expressed caring">Expressed Caring</option>

    </select>
    <br/><br/>

      <select
      value={who}
      placeholder="who"
      name="who"
      onChange={handleChange}
      >
      <option value="" disabled>Select Sibling:</option>
      {usersChoiceOptions}
      </select>
      <br/><br/>

      <input
      placeholder="when"
      name="when"
      onChange={handleChange}
      value={when}
      /><br/><br/>

      <textarea
      placeholder="what"
      name="what"
      rows="6"
      value={what}
      onChange={handleChange}
      /><br/><br/>

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
