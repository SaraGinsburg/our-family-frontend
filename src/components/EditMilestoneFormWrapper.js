import React from 'react'
import MilestoneForm from './MilestoneForm'
// add to /actions next 2 functions
import { updateMilestone } from '../actions/myMilestones'
import { setFormDataForEdit, resetMilestoneForm } from '../actions/milestoneForm'
import { connect } from 'react-redux'

class EditMilestoneFormWrapper extends React.Component {

  componentDidMount(){
    this.props.milestone && this.props.setFormDataForEdit(this.props.milestone)
  }

  componentDidUpdate(prevProps) {
    this.props.milestone && !prevProps.milestone && this.props.setFormDataForEdit(this.props.milestone)
  }

  componentWillUnmount() {

  }

  handleSubmit = (formData) => {
    const { updateMilestone, milestone, history } = this.props
    updateMilestone({
      ...formData,
      milestoneId: milestone.id
    }, history)
  }

  render() {
    const { history, handleSubmit } = this.props
    return <MilestoneForm editMode history={history} handleSubmit={this.handleSubmit} />
  }


}

export default connect(null, {updateMilestone, setFormDataForEdit, resetMilestoneForm})(EditMilestoneFormWrapper);
