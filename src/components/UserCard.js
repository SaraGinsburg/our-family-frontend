import React from 'react'
  import './UserCard.css'

  const UserCard = ({user}) => {
    // console.log("pic", user.attributes.picture)
    return (
      !user
      ? ""

      : <div key={user.id} className="UserCard"  >
          <h4>{user.attributes.first_name} {user.attributes.last_name}</h4>
          <img className="UserImage" src={user.attributes.picture} alt={user.attributes.first_name} />
          <p></p>
          <h6>Birthdate: {user.attributes.birthdate}</h6>
          <h6>Points Earned: {user.attributes.points_earned}</h6>
        </div>
    )
  }


  export default UserCard
