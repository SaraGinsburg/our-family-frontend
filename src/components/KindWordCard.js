import React from 'react'
import {Link} from 'react-router-dom'


const KindWordCard = ({kindWord}) => {
  return (
    kindWord ?
    <div className="KindWordCards">
      <br/>
      <h3>{kindWord.attributes.heading}</h3>
      <h5>{kindWord.attributes.when}</h5>
      <p>{kindWord.attributes.who} - {kindWord.attributes.what}</p>
      <Link to={`/kindWords/${kindWord.id}/edit`}> Edit this kindWord</Link>
    </div> :
    <p>This is a card with no kindWord!</p>
  )
}

export default KindWordCard;
