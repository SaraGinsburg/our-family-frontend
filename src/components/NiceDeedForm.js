import React from 'react'
import { updateNiceDeedForm } from '../actions/niceDeedForm'
import { getUsers } from '../actions/users'
import { connect } from 'react-redux'


const niceDeedForm = ({ formData, users, updateNiceDeedForm, getUsers, userId, niceDeed, handleSubmit, editMode}) => {
  const { when, what, heading, who } = formData


  const usersChoice = users.filter(user => user.id === userId ? false : true)
  const whoUser = users.find(user => user.id === who)


  // const usersChoiceOptions = usersChoice.map((u) => <option id={u.id} key={u.attributes.first_name}>{u.attributes.first_name}</option>)
  const usersChoiceOptions = usersChoice.map((u) => <option value={u.id} key={u.id}>{u.attributes.first_name}</option>)


  const handleChange = event => {
    const { name, value } = event.target
    updateNiceDeedForm(name, value)
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
        <option value="helpful">Helpful</option>
        <option value="sharing">Sharing</option>
        <option value="generous">Generous</option>
        <option value="considerate">Considerate</option>
        <option value="kind">Kind</option>
        <option value="patient">Patient</option>

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
        type="submit"
        value={editMode ? "Update Nice Deed" : "Create Nice Deed" }
      />

    </form>
  )}


  const mapStateToProps = state => {
  
    const userId = state.currentUser ? state.currentUser.id : ""
    return {
      formData: state.niceDeedForm,
      users: state.users.users,
      userId
    }
  }

  export default connect(mapStateToProps, {updateNiceDeedForm, getUsers})(niceDeedForm)
