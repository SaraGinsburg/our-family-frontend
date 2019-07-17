import React from 'react'
import {Link} from 'react-router-dom'


const MilestoneCard = ({milestone}) => {
  return (
    milestone ?
    <div>
      <h3>{milestone.attributes.heading}</h3>
      <h5>{milestone.attributes.when}</h5>
      <p>{milestone.attributes.what}</p>
      <Link to={`/milestones/${milestone.id}/edit`}> Edit this milestone</Link>
    </div> :
    <p>This is a card with no milestone!</p>
  )
}

export default MilestoneCard;
