import React from 'react';

import SiblingCard from '../components/SiblingCard'

import './Siblings.css'

const Siblings = ({siblings}) => {
  const sibArray = siblings.map((sib) => <SiblingCard key={sib.id} sibling={sib}/>)
  return (
    <div className='SiblingsContainer'>
    <h1>Siblings</h1>
    {sibArray}
    </div>
  )
}

export default Siblings
