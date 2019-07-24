import React from 'react'
import { updateMilestoneForm } from '../actions/milestoneForm'
import { connect } from 'react-redux'


const MilestoneForm = ({ formData, updateMilestoneForm,  userId, milestone, handleSubmit, editMode }) => {
  const { when, what, picture, heading } = formData

  const handleChange = event => {
    const { name, value } = event.target
    updateMilestoneForm(name, value)
  }

  return (

    <form className="FormContainer" onSubmit={event => {
      event.preventDefault()
      handleSubmit(formData)
    }}>
      <br/>
      <input
        placeholder="heading"
        name="heading"
        onChange={handleChange}
        value={heading}
      /><br/><br/>

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
        placeholder="picture"
        name="picture"
        onChange={handleChange}
        value={picture}
      /><br/><br/>

      <input
        type="submit"
        value={ editMode ? "Update Milestone" : "Create Milestone" }
      />
    </form>
  )}

const mapStateToProps = state => {
  const userId = state.currentUser ? state.currentUser.id : ""
  return {
    formData: state.milestoneForm,
    userId
  }
}

export default connect(mapStateToProps, { updateMilestoneForm })(MilestoneForm);
