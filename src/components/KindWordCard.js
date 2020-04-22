import React from 'react'
import {Link} from 'react-router-dom'
import UserCard from './UserCard'
import { connect } from 'react-redux'

const KindWordCard = ({kindWord, users}) => {
// console.log("kindword", kindWord.kindWord.attributes.who)
  return (
    kindWord ?
    <div className="KindWordCards">
      <h3>{kindWord.attributes.heading}</h3>
      <h5>{kindWord.attributes.when}</h5>
      <p>{kindWord.attributes.what}</p>

      {kindWord.attributes.who === "" ? "" : <UserCard user = {users.find(user => user.id === kindWord.attributes.who)} />}

      <Link to={`/kindWords/${kindWord.id}/edit`}> Edit this kindWord</Link>
    </div> :
    <p>This is a card with no kindWord!</p>
  )
}

const mapStateToProps = state => {

  return {
    users: state.users.users
  }
}

export default connect(mapStateToProps)(KindWordCard);
