import React from 'react'
import {Link} from 'react-router-dom'


const NiceDeedCard = ({niceDeed}) => {
  return (
    niceDeed ?
    <div className="NiceDeedCards">
      <br/>
      <h3>{niceDeed.attributes.heading}</h3>
      <h5>{niceDeed.attributes.when}</h5>
      <p>{niceDeed.attributes.who} - {niceDeed.attributes.what}</p>
      <Link to={`/niceDeeds/${niceDeed.id}/edit`}> Edit this niceDeed</Link>
    </div> :
    <p>This is a card with no niceDeed!</p>
  )
}

export default NiceDeedCard;
