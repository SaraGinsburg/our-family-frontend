import React from 'react'
import MilestoneForm from './MilestoneForm'
import { createMilestone } from '../actions/myMilestones'
import { connect } from 'react-redux'

const NewMilestoneFormWrapper = ({ history, createMilestone }) => {

  const handleSubmit = (formData, userId) => {
    console.log("in NewMilestoneFormWrapper userId", userId)
    createMilestone({
      ...formData,
      userId
    }, history)
  }

  return <MilestoneForm history={history} handleSubmit={handleSubmit} />
}

export default connect(null, { createMilestone })(NewMilestoneFormWrapper);
