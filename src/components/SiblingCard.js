  import React from 'react'

  const SiblingCard = ({ sibling }) => (
        <div key={sibling.id} className="SiblingCard">
          <h3>{sibling.attributes.first_name} {sibling.attributes.last_name}</h3>
          <p> Birthdate: {sibling.attributes.birthdate}</p>
          <p> Points Earned: {sibling.attributes.points_earned}</p>
          <img className="SiblingImage" src={sibling.attributes.picture} alt=""  />
        </div>
      )

  export default SiblingCard;
