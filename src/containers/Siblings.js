import React from 'react';
import SiblingCard from '../components/SiblingCard'
import './Siblings.css'


const Siblings = (props) => (
  <div>
    <h1>Siblings</h1>
    {props.siblings.map(sibling =>
      <div>
        <h3>{sibling.attributes.first_name} {sibling.attributes.last_name}</h3>
        <p> Birthdate: {sibling.attributes.birthdate}</p>
        <p> Points Earned: {sibling.attributes.points_earned}</p>
        <img className="SiblingImage" src={sibling.attributes.picture} alt="" />
      </div>
    )}
  </div>
)

export default Siblings
