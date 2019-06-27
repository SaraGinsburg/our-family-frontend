import React from 'react'

const MilestoneCard = ({milestone}) => {
  console.log("in MilestoneCard", milestone)
  return (
    !milestone ? "" :
    <div key={milestone.id} className="MilestoneCard">
      <h3>{milestone.attributes.heading}</h3>
      <img className="MilestoneImage" src={milestone.attributes.picture} alt=""  />
      <h5>{milestone.attributes.when}</h5>
      <p>{milestone.attributes.what}</p>
    </div>
  )
}

export default MilestoneCard;
