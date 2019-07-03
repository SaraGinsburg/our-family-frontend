import React from 'react'
import { updateNewMilestoneForm } from '../actions/newMilestoneForm'
import { createMilestone } from '../actions/myMilestones'
import { connect } from 'react-redux'


const newMilestoneForm = ({formData, history,  updateNewMilestoneForm, createMilestone, userId }) => {
  const { when, what, picture, heading } = formData

  const handleChange = event => {
    console.log("In Handle Change")
    const { name, value } = event.target
    updateNewMilestoneForm(name, value)
  }

  const handleSubmit = event => {
    event.preventDefault()
    console.log("In Handle Submit")
    createMilestone({
      ...formData,
      userId
    })
  }

  return (
    <form onSubmit={handleSubmit}>
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
        value="Create Milestone"
      />
    </form>
  )
}

const mapStateToProps = state => {
  const userId = state.currentUser ? state.currentUser.id : ""
  return {
    formData: state.newMilestoneForm,
    userId
  }
}

export default connect(mapStateToProps, {updateNewMilestoneForm, createMilestone})(newMilestoneForm);
