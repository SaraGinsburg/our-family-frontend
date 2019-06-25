import React from 'react'
import { connect } from 'react-redux'
import MilestoneCard from './MilestoneCard'

const MyMilestones = props => {
  const milestoneCards = props.milestones.length > 0 ?
    props.milestones.map(m => <MilestoneCard milestone={m} key={m.id}/>):
    null

    return (
      milestoneCards
    )
}

const mapStateToProps = state => {
  return {
    milestones: state.myMilestones
  }
}

export default connect(mapStateToProps)(MyMilestones)
