import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'


const MyMilestones = props => {
  const milestoneCards = props.milestones.length > 0 ?
    props.milestones.map(m => (<p key={m.id}><Link to={`/milestones/${m.id}`}>{m.attributes.heading}</Link></p>)):
    null

    return  milestoneCards

}

const mapStateToProps = state => {
  return {
    milestones: state.myMilestones
  }
}

export default connect(mapStateToProps)(MyMilestones)
