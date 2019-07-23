import React from 'react'
  import './UserCard.css'

  const UserCard = ({user}) => {
    return (
      !user
      ? ""
      : <div key={user.id} className="UserCard"  >
          <h3>{user.attributes.first_name} {user.attributes.last_name}</h3>
          <img className="UserImage" src={user.attributes.picture} alt={user.attributes.first_name} />
          <p>Birthdate: {user.attributes.birthdate}</p>
          <p>Points Earned: {user.attributes.points_earned}</p>
        </div>
    )
  }


  export default UserCard
