import React from 'react'
import { updateMilestoneForm } from '../actions/milestoneForm'
import { connect } from 'react-redux'


const MilestoneForm = ({ formData, history,  updateMilestoneForm,  userId, milestone, handleSubmit, editMode }) => {

  const { when, what, picture, heading } = {formData}

  const handleChange = event => {
    console.log("In Handle Change")
    const { name, value } = event.target
    updateMilestoneForm(name, value)
  }



  return (
    <form onSubmit={event => {
      console.log("in MilestoneForm onSubmit")
      handleSubmit(event, formData, userId, history)
    }}>
      <input
        placeholder="heading"
        name="heading"
        onChange={handleChange}
        value={heading}
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
        placeholder="picture"
        name="picture"
        onChange={handleChange}
        value={picture}
      /><br/>

      <input
        type="submit"
        value={ editMode ? "Update Milestone" : "Create Milestone" }
      />
    </form>
  )}

const mapStateToProps = state => {
  const userId = state.currentUser ? state.currentUser.id : ""
  return {
    formData: state.MilestoneForm,
    userId
  }
}

export default connect(mapStateToProps, { updateMilestoneForm })(MilestoneForm);
