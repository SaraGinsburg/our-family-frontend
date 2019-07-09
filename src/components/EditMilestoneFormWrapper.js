import React from 'react'
import MilestoneForm from './MilestoneForm'
// add to /actions next 2 functions
import { updateMilestone } from '../actions/myMilestones'
import { setFormDataForEdit } from '../actions/milestoneForm'
import { connect } from 'react-redux'

class EditMilestoneFormWrapper extends React.Component {
  componentDidMount(){
    this.props.milestone && this.props.setFormDataForEdit(this.props.milestone)
  }

  handleSubmit = (event, formData, userId, history) => {
    const { updateMilestone, milestone } = this.props
    event.preventDefault()
    console.log("in handle submit, event is ", event)
    updateMilestone({
      ...formData,
      milestoneId: milestone.id,
      userId
    }, history)
  }

  render() {
    const { history, handleSubmit } = this.props
    return <MilestoneForm editMode history={history} handleSubmit={handleSubmit} />
  }
}

export default connect(null, {updateMilestone, setFormDataForEdit})(EditMilestoneFormWrapper);
