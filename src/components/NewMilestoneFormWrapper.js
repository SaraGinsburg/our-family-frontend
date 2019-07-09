import React from 'react'
import MilestoneForm from './MilestoneForm'
import { createMilestone } from '../actions/myMilestones'
import { connect } from 'react-redux'

const NewMilestoneFormWrapper = ({ history, createMilestone }) => {
  const handleSubmit = (event, formData, userId, history) => {
    event.preventDefault()
    console.log("in handle submit, event is ", event)
    createMilestone({
      ...formData,
      userId
    }, history)
  }

  return <MilestoneForm history={history} handleSubmit={handleSubmit} />
}

export default connect(null, {createMilestone})(NewMilestoneFormWrapper);
